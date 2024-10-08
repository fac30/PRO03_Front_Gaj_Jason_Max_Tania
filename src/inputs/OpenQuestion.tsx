// import React from 'react'
import Label from '../text/Label'

export default function OpenQuestion() {
	return (
		<div className='mt-6'> {/* Adds margin-top (6 * 4px = 24px) */}
			<Label htmlFor="inputFeel" children="How did you feel on that date?" className="flex flex-col space-y-2 text-lg font-medium text-gray-700" />
			<textarea 
				id="inputFeel" 
				name="feel" 
				className="w-1/4 mx-auto p-4 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
			</textarea>
		</div>
	)
}

