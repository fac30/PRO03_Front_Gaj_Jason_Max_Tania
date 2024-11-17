import { createContext, useState, useEffect } from 'react';
import LandingPage from '../pages/LandingPage';
import InputPage from '../pages/InputPage';
import PlaylistPage from '../pages/PlaylistPage';
import DummyPage from '../pages/DummyPage';
import LoadingPage from '../pages/LoadingPage';
import { TracklistProps } from '../utils/playlistTypes';

interface UserContextType {
	userName: string;
	setUserName: (name: string) => void;
	playlistJson: Promise<TracklistProps>;
	setPlaylistJson: (json: Promise<TracklistProps>) => void;
}

export const UserContext = createContext<UserContextType>({
	userName: "",
	setUserName: () => {},
	playlistJson: new Promise((resolve) => resolve([])),
	setPlaylistJson: () => {},
});

interface ContentProps {
    setCurrentPage: React.Dispatch<
        React.SetStateAction<
            React.Dispatch<
                React.SetStateAction<'dummy' | 'landing' | 'input' | 'loading' | 'playlist'>
            >
        >
    >;
}

function Content({ setCurrentPage }: ContentProps) {
	const [currentPage, setCurrentPageLocal] = useState<'dummy' | 'landing' | 'input' | 'loading' | 'playlist'>('landing');
	const [userName, setUserName] = useState("");
	const [playlistJson, setPlaylistJson] = useState<Promise<TracklistProps>>(new Promise((resolve) => resolve([])));

	const userContextValue = {
		userName,
		setUserName,
		playlistJson,
		setPlaylistJson,
	};

	// Function to handle playlist creation and loading state
	const handleCreatePlaylist = (playlistPromise: Promise<TracklistProps>) => {
		setPlaylistJson(playlistPromise);
		setCurrentPageLocal('loading');

		playlistPromise
			.then(() => setCurrentPageLocal('playlist'))
			.catch((error) => {
				console.error('Error loading playlist:', error);
				setCurrentPageLocal('input');
			});
	};

	 // Pass down the `setCurrentPageLocal` to the parent
	useEffect(() => {
        setCurrentPage(() => setCurrentPageLocal);
    }, [setCurrentPage]);

	const renderPage = () => {
		switch (currentPage) {
			case 'landing':
				return <LandingPage onNext={() => setCurrentPageLocal('input')} setUserName={setUserName} />;
			case 'input':
				return <InputPage setPlaylistJson={handleCreatePlaylist} />;
			case 'loading':
				return <LoadingPage />;
			case 'playlist':
				return <PlaylistPage onNext={() => setCurrentPageLocal('input')} />;
			case 'dummy':
				return <DummyPage onNext={() => setCurrentPageLocal('landing')} />;
			default:
				return <DummyPage onNext={() => setCurrentPageLocal('landing')} />;
		}
	};

	return (
		<div className="w-full h-full flex flex-col">
			<UserContext.Provider value={userContextValue}>
				{renderPage()}
			</UserContext.Provider>
		</div>
	);
}

export default Content;
