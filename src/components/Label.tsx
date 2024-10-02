import { LabelProps } from '../utils/typeBucket';

<<<<<<< HEAD
export default function Label({ htmlFor, children }: LabelProps)  {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
=======
function Label({ htmlFor, children }: LabelProps)  {
  return (
    <label htmlFor={htmlFor}>
			{children}
		</label>
>>>>>>> main
  );
}

export default Label;