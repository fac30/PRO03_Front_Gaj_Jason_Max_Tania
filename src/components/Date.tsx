// import React from 'react'
import Label from './Label';

export default function Date() {
    return (
      <>
				<Label htmlFor="date" children="Date" />
				<input type="text" id="date" name="date" />
			</>
  )
}
