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
		<div className="bg-[url('/src/assets/web_landing_page.svg')] bg-cover bg-center flex-grow flex-col flex justify-center items-center min-h-0">
			<LandingText />
			<NameForm onSubmit={handleSubmit} />
		</div>
	)
}

export default LandingPage;
