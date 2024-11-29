import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {loadingAnimation} from "../assets/anima_loading.json";

const LoadingPage: React.FC = () => {

  return (
    <div className='bg-[var(--lightgreen)] flex justify-center items-center w-full h-full'>
        <DotLottieReact
          src={loadingAnimation}
          loop
          autoplay
        />
    </div>
  );
};


export default LoadingPage;
