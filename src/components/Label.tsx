import React from 'react'
import { LabelProps } from '../Utils/typeBucket';

export default function Label({ htmlFor, children }: LabelProps)  {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  );
}
      
  
