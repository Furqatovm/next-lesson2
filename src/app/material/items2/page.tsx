import React from 'react'

import {  Items2Items } from '@/app/constants';
import { CardType } from '../../../../@types';
import Card from '../(card)/card';


const Item = () => {
  return (
    <div className="grid grid-cols-4 gap-10 mb-10">
    {Items2Items.map((val: CardType) => {
      return <Card  key={val.id} product={val} />;
    })}
  </div>
  )
}

export default Item