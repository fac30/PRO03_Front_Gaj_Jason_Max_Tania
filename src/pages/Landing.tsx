import NameForm from '../forms/NameForm';
import LandingText from '../text/LandingText';

interface LandingProps {
	onNext: () => void;
}

function Landing({ onNext }: LandingProps) {
  return (
    // render background image that fills the whole component
		<>
			<LandingText />
			<NameForm onSubmit={onNext} />
		</>
  )
}

export default Landing;