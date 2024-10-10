import { createContext, useState } from 'react';
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

function Content() {
	const [currentPage, setCurrentPage] = useState<'dummy' | 'landing' | 'input' | 'loading' | 'playlist'>('landing');
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

		setCurrentPage('loading');

		playlistPromise
			.then(() => setCurrentPage('playlist'))
			.catch((error) => {
				console.error('Error loading playlist:', error);
				setCurrentPage('input');
			});
	};

	const renderPage = () => {
		switch (currentPage) {
			case 'landing':
				return <LandingPage onNext={() => setCurrentPage('input')} setUserName={setUserName} />;
			case 'input':
				return <InputPage setPlaylistJson={handleCreatePlaylist} />;
			case 'loading':
				return <LoadingPage />;
			case 'playlist':
				return <PlaylistPage onNext={() => setCurrentPage('input')} />;
			case 'dummy':
				return <DummyPage onNext={() => setCurrentPage('landing')} />;
			default:
				return <DummyPage onNext={() => setCurrentPage('landing')} />;
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
