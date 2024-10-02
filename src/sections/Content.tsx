import { useState } from 'react';
import DevTools from './DevTools';
import Landing from '../pages/Landing';
// import Input from '../pages/Input';
// import Loading from '../pages/Loading';
import Playlist from '../pages/Playlist';
import Dummy from '../pages/Dummy';

function Content() {
	const [currentPage, setCurrentPage] = useState('landing');

	const renderPage = () => {
		switch (currentPage) {
			case 'dummy':
				return <Dummy onNext={() => setCurrentPage('landing')} />;
			case 'landing':
				return <Landing onNext={() => setCurrentPage('input')} />;
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
		<main>
			{renderPage()}
			<DevTools setCurrentPage={setCurrentPage} />
		</main>
	)
}

export default Content;