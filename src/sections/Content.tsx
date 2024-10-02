import { createContext, useState } from 'react';
import DevTools from './DevTools';
import LandingPage from '../pages/LandingPage';
import InputPage from '../pages/inputPage';
// import Loading from '../pages/Loading';
import PlaylistPage from '../pages/PlaylistPage';
import DummyPage from '../pages/DummyPage';

interface UserContextType {
	userName: string;
	setUserName: (name: string) => void;
}

export const UserContext = createContext<UserContextType>({
	userName: "",
	setUserName: () => {},
});

function Content() {
	const [currentPage, setCurrentPage] = useState('landing');
	const [userName, setUserName] = useState("");

	const userContextValue = {
		userName,
		setUserName,
	};

	const renderPage = () => {
		switch (currentPage) {
			case 'dummy':
				return <DummyPage onNext={() => setCurrentPage('landing')} />;
			case 'landing':
				return <LandingPage onNext={() => setCurrentPage('input')} setUserName={setUserName} />;
			case 'input':
				return <InputPage onNext={() => setCurrentPage('loading')} />;
			case 'loading':
				return <DummyPage onNext={() => setCurrentPage('playlist')} />;
			case 'playlist':
				return <PlaylistPage onNext={() => setCurrentPage('landing')} />;
			default:
				return <DummyPage onNext={() => setCurrentPage('landing')} />;
		}
	};

	return (
		<UserContext.Provider value={userContextValue}>
			<main>
				{renderPage()}
				<DevTools setCurrentPage={setCurrentPage} />
			</main>
		</UserContext.Provider>
	)
}

export default Content;