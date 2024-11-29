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
			className="w-full px-4 py-3 border border-[var(--yellow)] rounded-full bg-white text-[#383050] placeholder-[#9b8fbc] focus:ring-2 focus:ring-[#64558f] hover:bg-gray-100 cursor-pointer"
		/>
	)
}

export default NameInput;