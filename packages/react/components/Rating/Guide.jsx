import React from 'react';
import { Code } from '../../helpers';
import Rating from './';

export default function RatingGuide() {

  return (
    <>
      <h1>Rating</h1>
      <p>Интерфейс для выставления оценок</p>
      <Code v="import { Rating } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Rating />
    </>
  );

}
