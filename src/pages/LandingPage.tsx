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
		<>
			<LandingText />
			<NameForm onSubmit={handleSubmit} />
		</>
	)
}

export default LandingPage;
