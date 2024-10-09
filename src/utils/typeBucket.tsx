export type buttonProps = {
	btnText: string;
	btnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	btnClassName: string;
	type?: 'button' | 'submit' | 'reset';
};

export type userName = {
	primaryText: string;
	userName: string;
};

export type LabelProps = {
	htmlFor: string;
	text: string;
	className?: string;
};
