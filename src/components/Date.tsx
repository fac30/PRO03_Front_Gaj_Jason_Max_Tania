import React from 'react'
import Label from './Label';
import { LabelProps } from '../Utils/typeBucket';

export default function Date() {
    return (
      <>
    <Label htmlFor="day" name="day"></Label>
    <input type="text" id="day" name="day" />

    </>
  )
}
