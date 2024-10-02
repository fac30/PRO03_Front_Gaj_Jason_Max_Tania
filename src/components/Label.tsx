// import React from 'react';
import { LabelProps } from '../utils/typeBucket';

export default function Label({ htmlFor, name, children }: LabelProps)  {
  return (
    <label htmlFor={htmlFor} name={name}>
      {children}
    </label>
  );
}
      
  
