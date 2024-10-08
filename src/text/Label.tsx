import { LabelProps } from '../utils/typeBucket';

function Label({ htmlFor, children, className }: LabelProps)  {
  return (
    <label htmlFor={htmlFor} className={className}>
			{children}
		</label>
  );
}

export default Label;