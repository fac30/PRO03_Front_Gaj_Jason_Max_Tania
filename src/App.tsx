import './App.css';
import { useState } from 'react';
import Header from './sections/Header';
import Content from './sections/Content';
import Footer from './sections/Footer';

function App() {
	const [setCurrentPage, setSetCurrentPage] = useState<
        React.Dispatch<React.SetStateAction<'dummy' | 'landing' | 'input' | 'loading' | 'playlist'>>
    >(() => () => {});

	return (
		<div className="flex flex-col min-h-screen w-full h-full">
			<Header setCurrentPage={setCurrentPage} />
			<main className="flex-grow w-full h-full">
			    <Content setCurrentPage={setSetCurrentPage} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
