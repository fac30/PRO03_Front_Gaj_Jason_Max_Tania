import { createContext, useState } from 'react';
import DevTools from './DevTools';
import LandingPage from '../pages/LandingPage';
import InputPage from '../pages/InputPage';
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
			//case 'loading':
				//return <LoadingPage onNext={() => setCurrentPage('playlist')} />;
			case 'playlist':
				return <PlaylistPage onNext={() => setCurrentPage('landing')} />;
			default:
				return <DummyPage onNext={() => setCurrentPage('landing')} />;
		}
	};

	return (
		<div className="w-full h-full flex flex-col">
			<UserContext.Provider value={userContextValue}>
				{renderPage()}
				<DevTools setCurrentPage={setCurrentPage} />
		    </UserContext.Provider>
		</div>		
	)
}

export default Content;
