import NameForm from '../forms/NameForm';
import LandingText from '../text/LandingText';

interface LandingProps {
	onNext: () => void;
	setUserName: (name: string) => void;
}

function Landing({ onNext, setUserName }: LandingProps) {
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

export default Landing;