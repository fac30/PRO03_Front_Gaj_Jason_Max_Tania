import React, { useEffect, useState} from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

//install the Lottie:
// npm install @lottiefiles/dotlottie-react

interface LoadingProps {
  //loading: boolean;
  onNext: () => void;
}

const LoadingPage: React.FC<LoadingProps> = ({ onNext }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
		// Simulate a data fetching process
		setTimeout(() => {
		setLoading(false);  // Stop loading after 5 seconds
    onNext();
		}, 5000);
	}, []);

  return (


    <div className='bg-[#94CD31] flex justify-center items-center w-full h-full'>
      {loading && (
        <DotLottieReact
          src="/src/assets/anime_man.json"
          loop
          autoplay
        />)}
    </div>
  );
};


export default LoadingPage;