import './App.css';
import Header from './sections/Header';
//import Content from './sections/Content';
import Footer from './sections/Footer';

import Loading from './pages/Loading';
import { useState, useEffect } from 'react';


function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate a data fetching process
		setTimeout(() => {
		setLoading(false);  // Stop loading after 3 seconds
		}, 3000);
	}, []);
  
    return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow flex justify-center items-center"> {/* class expands to fill the available space between the header and footer. */}
			    {/*<Content />*/}

                    {loading ? (
						<Loading loading={loading} />
						) : (
							<div>
							<h1>Data has been loaded!</h1>
							</div>
						)}

			</main>
			<Footer />
		</div>
  );
}	

export default App;
