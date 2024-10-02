import './App.css';
import Header from './sections/Header';
import Content from './sections/Content';
import Footer from './sections/Footer';

function App() {
  
  return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Content/>
			<Footer />
		</div>
  );
}	

export default App;