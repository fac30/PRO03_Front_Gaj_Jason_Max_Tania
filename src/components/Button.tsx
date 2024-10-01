import React from 'react';
import { buttonProps } from '../Utils/typeBucket';

export default function Button({
	btnClassName,
	btnClick,
	btnText,
}: buttonProps) {
	return (
		<div>
			<button className={btnClassName} onClick={btnClick}>
				{btnText}
			</button>
		</div>
	);
}
