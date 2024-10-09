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
		<div className="bg-[url('/src/assets/landing_bg_img.svg')] bg-cover bg-center min-h-screen flex flex-col justify-between items-center">
			<div className="flex flex-col items-center justify-center flex-grow">
			    <LandingText />
			</div>
    
			<div className="flex flex-col items-center justify-center flex-grow mb-8">
				<NameForm onSubmit={handleSubmit} /> 
			</div>
  		</div>
	)
}

export default LandingPage;
