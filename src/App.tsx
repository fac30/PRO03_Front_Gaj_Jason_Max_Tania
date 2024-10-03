import './App.css';
import Header from './sections/Header';
import Content from './sections/Content';
import Footer from './sections/Footer';


function App() {
  
    return (
		<div className="flex flex-col min-h-screen">
			<Header />
			{/* Main will center the content without pushing the footer */}
			<main className="flex-grow flex justify-center items-center min-h-0">
			    <Content />
			</main>
			<Footer />
		</div>
  );
}	

export default App;
