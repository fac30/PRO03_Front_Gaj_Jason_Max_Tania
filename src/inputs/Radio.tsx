import Label from '../text/Label';

// Define the type for the props
interface RadioProps {
	selectedQuant: number;
	setQuant: (num: number) => void;
}

export default function Radio({ selectedQuant, setQuant }: RadioProps) {
	return (
		<div className="flex flex-col items-center">
			<Label htmlFor="quantity-options" text='Select Quantity:' />
			<div className='flex justify-center space-x-4'>
				{[5, 10, 15].map((num) => (
					<button
						key={num}
						type='button'
						onClick={() => setQuant(num)}
						className={`w-12 h-12 rounded-full ${
							selectedQuant === num ? 'bg-purple-600' : 'bg-purple-400'
						} text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	);
}
