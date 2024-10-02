import React from 'react'
import { LabelProps } from '../Utils/typeBucket';

export default function Label({ htmlFor, name, children }: LabelProps)  {
  return (
    <label htmlFor={htmlFor} name={name}>
      {children}
    </label>
  );
}
      
  
