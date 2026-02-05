import Forward from '@/app/assets/top'
import { dropDowns } from '@/app/constants'
import React from 'react'

const SearchLeft = () => {
  return (
    <div className='bg-white p-3 flex flex-col gap-4 rounded-sm'>
        {
          dropDowns.map((val, index) =><div  key={index} className='flex gap-2 items-center '>
          <Forward />
         <span className='text-primary text-[14px]'>{val}</span>
        </div>)
        }
    </div>
  )
}

export default SearchLeft