import FormName from '../forms/NameForm';
import LandingText from '../text/LandingText';

function Landing() {
  return (
    // render background image that fills the whole component
		<>
			<LandingText />
			<FormName />
		</>
  )
}

export default Landing;