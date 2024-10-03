import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoadingProps {
  loading: boolean;
}

const LoadingPage: React.FC<LoadingProps> = ({ loading }) => {
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