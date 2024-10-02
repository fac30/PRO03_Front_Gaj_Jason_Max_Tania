import { LabelProps } from '../utils/typeBucket';

function Label({ htmlFor, children }: LabelProps)  {
  return (
    <label htmlFor={htmlFor}>
			{children}
		</label>
  );
}

export default Label;