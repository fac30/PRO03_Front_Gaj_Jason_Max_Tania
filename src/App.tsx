import './App.css';
import Header from './sections/Header';
import Content from './sections/Content';
import Footer from './sections/Footer';
function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-grow justify-center align-items '>
				{' '}
				{/* class expands to fill the available space between the header and footer. */}
				<Content />
			</main>
			<Footer />
		</div>
	);
}

export default App;
