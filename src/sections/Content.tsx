import { useState } from 'react';
import Landing from '../pages/Landing';
// import Input from '../pages/Input';
// import Loading from '../pages/Loading';
// import Playlist from '../pages/Playlist';
import Dummy from '../pages/Dummy';

function Content() {
	const [currentPage, setCurrentPage] = useState('landing');

	const renderPage = () => {
		switch (currentPage) {
			case 'dummy':
				return <Dummy onNext={() => setCurrentPage('landing')} />;
			case 'landing':
				return <Landing onNext={() => setCurrentPage('dummy')} />;
			// case 'input':
			// 	return <Input onNext={() => setCurrentPage('loading')} />;
			// case 'loading':
			// 	return <Loading onNext={() => setCurrentPage('playlist')} />;
			// case 'playlist':
			// 	return <Playlist />;
			default:
				return <Dummy onNext={() => setCurrentPage('Landing')} />;
		}
	};

	return (
		<main>
			{renderPage()}
		</main>
	)
}

export default Content;