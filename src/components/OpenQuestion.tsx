// import React from 'react'
import Label from './Label';

export default function OpenQuestion() {
	return (
		<div className='w-full'>
			
			<Label
				htmlFor='inputFeel'
				children='How did you feel on that date?'
				className='flex flex-col space-y-2 text-lg font-medium text-gray-700'
			/>
			<textarea
				id='feel'
				name='feel'
				rows={4}
				className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-y text-gray-900'
				placeholder='Describe your feelings...'
			></textarea>
		</div>
	);
}
