import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Rating from './';

export default function RatingGuide () {

  return (
    <>
      <h1>Rating</h1>
      <Code v="import { Rating } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Rating />
    </>
  )

}
