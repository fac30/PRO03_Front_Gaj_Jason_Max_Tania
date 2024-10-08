// import React from 'react';
import { userName } from '../Utils/typeBucket';

export default function HeroTxt({ primaryText, userName }: userName) {
	return (
		<p>
			{primaryText} {userName}
		</p>
	);
}
