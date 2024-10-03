import Button from "../buttons/Button";

interface DummyProps {
	onNext: () => void;
}

function DummyPage({ onNext }: DummyProps) {
  return (
    // render background image that fills the whole component
		<div>
			<p>lol no</p>
			<Button onClick={onNext} label="Back to Landing" />
		</div>
  )
}

export default DummyPage;
