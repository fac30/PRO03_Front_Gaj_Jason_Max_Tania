import Label from './Label';

export default function Date() {
	return (
		<div className='w-full'>
			<Label htmlFor='date' text='Select Date:' />
			<input
				type='date'
				id='date'
				name='date'
				className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900'
			/>
		</div>
	);
}
