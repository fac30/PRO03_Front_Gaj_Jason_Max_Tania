import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingPage: React.FC = () => {

  return (
    <div className='bg-[var(--lightgreen)] flex justify-center items-center w-full h-full'>
        <DotLottieReact
          src="/src/assets/anima_loading.json"
          loop
          autoplay
        />
    </div>
  );
};


export default LoadingPage;