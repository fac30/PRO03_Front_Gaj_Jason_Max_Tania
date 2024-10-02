import './App.css';
import Header from './sections/Header';
//import Content from './sections/Content';
import Footer from './sections/Footer';

import LoadingPage from './pages/LoadingPage';
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
			{/* Main will center the content without pushing the footer */}
			<main className="flex-grow flex justify-center items-center min-h-0">
			    {/*<Content />*/}
				{/**/}

                    {loading ? (
						<LoadingPage loading={loading} bgColor="#94CD31" />
						) : (
							<div className="flex justify-center items-center w-full h-full">
								<p>Data has been loaded!</p>
							</div>
						)}

			</main>
			<Footer />
		</div>
  );
}	

export default App;
