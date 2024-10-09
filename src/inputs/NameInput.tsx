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
			className="w-full px-4 py-3 border border-[var(--yellow)] rounded-lg bg-white text-[var(--text)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--button-default)]"
		/>
	)
}

export default NameInput;