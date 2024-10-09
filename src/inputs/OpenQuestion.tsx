// import React from 'react'
import Label from '../text/Label'

export default function OpenQuestion() {
	return (
		<div className='w-full'>
		<Label htmlFor='eventDescription' text='What happened and how did you feel on that date?' />
		<textarea
			id='eventDescription'
			name='eventDescription'
			rows={4}
			className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-y text-gray-900'
			placeholder='Describe your feelings...'
		></textarea>
	</div>
	)
}

