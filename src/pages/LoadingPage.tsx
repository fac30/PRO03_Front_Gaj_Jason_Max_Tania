import Button from "../buttons/Button";

interface LoadingProps {
	onNext: () => void;
}

function LoadingPage({ onNext }: LoadingProps) {
  return (
    // render background image that fills the whole component
		<div>
			<p>lol no</p>
			<Button btnClick={onNext} label="ONWARD" />
		</div>
  )
}

export default LoadingPage;