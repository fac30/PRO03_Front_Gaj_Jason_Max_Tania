import React from 'react';
import { hero } from '../Utils/typeBucket';

export default function HeroTxt({ heroText, heroName }: hero) {
	return (
		<>
			<h3>
				{heroText},<span>{heroName}</span>
			</h3>
		</>
	);
}
