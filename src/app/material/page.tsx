import React from 'react'

import { CardItems } from '@/app/constants';
import { CardType } from '../../../@types';
import Card from './(card)/card';


const Items1 = () => {
  return (
    <div className="grid grid-cols-4 gap-10 mb-10">
    {CardItems.map((val: CardType) => {
      return <Card  key={val.id} product={val} />;
    })}
  </div>
  )
}

export default Items1