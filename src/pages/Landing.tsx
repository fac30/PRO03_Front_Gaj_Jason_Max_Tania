import FormName from '../forms/FormName';
import LandingText from '../text/LandingText';

// declare the component with a capitalised name
function Landing() {
  return (
    // render background image that fills the whole component
		<>
		<LandingText />
		<FormName />
		</>
  )
}

// separate export statement, so it is easy to see at a glance
export default Landing;