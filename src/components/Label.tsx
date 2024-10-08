import { LabelProps } from '../Utils/typeBucket';

/**
 * Label component renders a label element associated with a form control.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.htmlFor - The id of the form control that the label is bound to.
 * @param {string} props.text - The content to be displayed inside the label.
 * @param {string} [props.className] - Optional CSS class to style the label.
 *
 * @returns {JSX.Element} The rendered label element.
 *
 * @example
 * // Example usage:
 * <Label htmlFor="inputId" className="custom-class">
 *   Name:
 * </Label>
 */

function Label({
	htmlFor,
	text,
	className = 'block text-sm font-medium text-gray-700 mb-1',
}: LabelProps) {
	return (
		<label htmlFor={htmlFor} className={className}>
			{text}
		</label>
	);
}

export default Label;
