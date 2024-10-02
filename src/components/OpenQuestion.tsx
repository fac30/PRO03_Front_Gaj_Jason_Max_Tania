// import React from 'react'
import Label from './Label'

export default function OpenQuestion () {
	return (
		<>
			<Label htmlFor="inputFeel" children="How did you feel on that date?"/>
			<textarea id="inputFeel" name="feel">
			</textarea>
		</>
	)
}
