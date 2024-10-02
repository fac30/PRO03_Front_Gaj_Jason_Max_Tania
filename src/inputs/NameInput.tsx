interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

function NameInput({ value, onChange }: NameInputProps) {
	return (
		<input
			type="text"
			placeholder="What's Your Name?"
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	)
}

export default NameInput;