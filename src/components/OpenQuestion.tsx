import React from 'react'
import Label from './Label'
import { LabelProps } from '../Utils/typeBucket'

export default function OpenQuestion () {
    return (
    <>
    {/* Input for how the user felt */}
     <Label htmlFor='question-two' children="How did you feel then?"/>
            <textarea id="question-two" name="question-two"></textarea>
    </>

  )
}
