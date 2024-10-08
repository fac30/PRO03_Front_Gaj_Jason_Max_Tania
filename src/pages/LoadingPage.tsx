import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// interface LoadingProps {
//   //loading: boolean;
//   //onNext: () => void;
// }

const LoadingPage: React.FC = () => {
  //const [loading, setLoading] = useState(true);

  // useEffect(() => {
	// 	// Simulate a data fetching process
	// 	setTimeout(() => {
	// 	//setLoading(false);
  //   onNext();
	// 	}, 5000);
	// }, []);

  return (
    <div className='bg-[#94CD31] flex justify-center items-center w-full h-full'>
        <DotLottieReact
          src="/src/assets/anime_man.json"
          loop
          autoplay
        />
    </div>
  );
};


export default LoadingPage;