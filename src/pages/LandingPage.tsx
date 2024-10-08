import NameForm from '../forms/NameForm';
import LandingText from '../text/LandingText';

interface LandingProps {
	onNext: () => void;
	setUserName: (name: string) => void;
}

function LandingPage({ onNext, setUserName }: LandingProps) {
	const handleSubmit = (name: string) => {
		setUserName(name);
		onNext();
	};

	return (
		<div className="bg-[url('/src/assets/landing_bg_img.svg')] max-lg:bg-[url('/src/assets/mobile_bg_.svg')] bg-cover bg-center min-h-screen flex flex-col justify-between items-center max-lg:justify-center max-lg:h-screen max-lg:space-y-2">
			<div className="flex flex-col items-center justify-center flex-grow max-lg:justify-start max-lg:mt-4">
			    <LandingText />
			</div>
    
			<div className="flex flex-col items-center justify-center flex-grow mb-8 max-lg:mb-2">
				<NameForm onSubmit={handleSubmit} /> 
			</div>
  		</div>
	)
}

export default LandingPage;
