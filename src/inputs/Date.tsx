import React from 'react'
import Label from '../text/Label';
import { LabelProps } from '../utils/typeBucket';


 

export default function Date() {
  return (
    <div className="flex flex-col "> {/* Flex column to stack label and input, with spacing */}
      <Label htmlFor="date" children="Date" className="text-lg font-medium text-gray-700" />
      <input 
        type="text" 
        id="date" 
        name="date" 
        placeholder="Select date" 
        className="    w-1/4 mx-auto p-4 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  )
}


