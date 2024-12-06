import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../assets/anima_loading.json";

const LoadingPage: React.FC = () => {
  return (
    <div className="bg-[var(--lightgreen)] flex justify-center items-center w-full h-full">
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LoadingPage;
