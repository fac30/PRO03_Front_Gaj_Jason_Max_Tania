import { createContext, useState } from 'react';
import DevTools from './DevTools';
import Landing from '../pages/Landing';
// import Input from '../pages/Input';
// import Loading from '../pages/Loading';
import Playlist from '../pages/Playlist';
import Dummy from '../pages/Dummy';

interface UserContextType {
	userName: string;
	setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType>({
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
				return <Dummy onNext={() => setCurrentPage('landing')} />;
			case 'landing':
				return <Landing onNext={() => setCurrentPage('input')} setUserName={setUserName} />;
			case 'input':
				return <Dummy onNext={() => setCurrentPage('loading')} />;
			case 'loading':
				return <Dummy onNext={() => setCurrentPage('playlist')} />;
			case 'playlist':
				return <Playlist onNext={() => setCurrentPage('playlist')} />;
			default:
				return <Dummy onNext={() => setCurrentPage('Landing')} />;
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

export { Content, UserContext };