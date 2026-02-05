import React from 'react'
import MySelect from './select'
import MaterialHeader from './header'
import Card from './product/[id]/page'

const Materials = () => {
  return (
    <div className='w-max-w mx-auto'>
            <h2 className='text-primary text-[1.5rem] text-center my-4'>qurilish materiallari</h2>
 
            <div className='flex flex-col gap-5'>
            <div>
              <span className='text-primary text-[14px] block my-2'>Tanlangan mahsulot turi</span>
              <MySelect />
            </div>

            <div>
              <span className='text-primary text-[14px] block my-2'>Tanlangan bo‘lim</span>
              <MySelect />
            </div>

            <div>
              <span className='text-primary text-[14px] block my-2'>Tanlangan kategoriya</span>
              <MySelect />
            </div>

            <div>
              <span className='text-primary text-[14px] block my-2'>Tanlangan guruh</span>
              <MySelect />
            </div>

            </div>

            <MaterialHeader />



            <div className='grid grid-cols-4 gap-10 mb-10'>
             {
              Array.from({length:12}).map((val, index) => <Card key={index} />)
             }
            </div>
    </div>
  )
}

export default Materials