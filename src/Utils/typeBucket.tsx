export type buttonProps = {
	btnText: string;
	btnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	btnClassName: string;
	type?: "button" | "submit" | "reset";
};

export type userName = {
	primaryText: string;
	userName: string;
};

export interface LabelProps {
	htmlFor: string;
        children: React.ReactNode;
        className: string;
}