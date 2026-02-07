import React from 'react'
import { DataType } from '../(card)/card'
import { CardItems } from '@/app/constants'
import { validateHeaderName } from 'http'
import DetailBottom from './cards'

export const  CardDetail = async ({ params }: { params: Promise<{ id: number }> }) => {
    const {id} =await params
    const product =CardItems.find((val) =>val.id ==id)
    console.log(product)

  return (
    <div className='w-max-w mx-auto grid grid-cols-[1fr_2fr] gap-10 my-10'>
        <div className='bg-[#FFFFFF] p-3 rounded-md'>
            <img src={product?.img} alt="" />
        </div>

        <div className='flex flex-col gap-8'>
            <div className='flex gap-10 items-center'>
                <div className='flex gap-2 items-center'>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_227_2664)">
    <path d="M10 12H9V17H10" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 12H15V17H14" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_227_2664">
      <rect width={24} height={24} fill="white" />
    </clipPath>
  </defs>
                    </svg>
                    <span className='text-primary font-semibold text-[14px]'>{product?.created_at}</span>

                </div>

                <div className='flex gap-2 items-center'>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_227_2672)">
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_227_2672">
      <rect width={24} height={24} fill="white" />
    </clipPath>
  </defs>
</svg>
                    <span className='text-primary font-semibold text-[14px]'>{product?.view}</span>

                </div>


                <div className="flex gap-2 items-center">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_227_2677)">
    <path d="M9 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V20L12 17L7 20V6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4Z" stroke="#1890FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_227_2677">
      <rect width={24} height={24} fill="white" />
    </clipPath>
  </defs>
</svg>


                    <span className='text-primary font-semibold text-[14px]'>Saqlash</span>

                </div>
            </div>
            <h3 className='text-primary text-[20px] font-black'>
                {product?.title}
            </h3>
            <p className='text-[#4B5055] text-[14px] leading-4.75'>
                {product?.description}
            </p>
        </div>
       
       <div className='col-span-full'>
        <DetailBottom />
       </div>
    </div>
  )
}

export default CardDetail