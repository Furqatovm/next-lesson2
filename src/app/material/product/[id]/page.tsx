import React from 'react'

import rasm from "../../../assets/photo.png"
import Image from 'next/image'
import { Button } from 'antd'

const Card = () => {
  return (
    <div className='flex gap-2 flex-col bg-white'>
        <Image src={rasm} alt='something' />
        <div className=' p-3 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
            <span className='text-primary text-[12px] p-1 bg-[#1890FF33] rounded-sm font-semibold'>#02.02.02.01-1000</span>
           <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 1H9C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3V17L6 14L1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1Z" stroke="#28366D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg>


        </div>

        <span className='text-primary text-[14px] font-semibold w-[80%]'>Удаляемый герметизирующий компаунд для повторного сращивания кабеля</span>

        <div className='flex justify-between items-center'>
            <Button style={{background:"#1890FF", borderColor:"#1890FF", color:"white"}}>Ko'rish</Button>
            <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width={47} height={47} rx="4.5" stroke="#28366D" />
  <path fillRule="evenodd" clipRule="evenodd" d="M24 23.25C24.1989 23.25 24.3897 23.329 24.5303 23.4697C24.671 23.6103 24.75 23.8011 24.75 24V26.25H27C27.1989 26.25 27.3897 26.329 27.5303 26.4697C27.671 26.6103 27.75 26.8011 27.75 27C27.75 27.1989 27.671 27.3897 27.5303 27.5303C27.3897 27.671 27.1989 27.75 27 27.75H24.75V30C24.75 30.1989 24.671 30.3897 24.5303 30.5303C24.3897 30.671 24.1989 30.75 24 30.75C23.8011 30.75 23.6103 30.671 23.4697 30.5303C23.329 30.3897 23.25 30.1989 23.25 30V27.75H21C20.8011 27.75 20.6103 27.671 20.4697 27.5303C20.329 27.3897 20.25 27.1989 20.25 27C20.25 26.8011 20.329 26.6103 20.4697 26.4697C20.6103 26.329 20.8011 26.25 21 26.25H23.25V24C23.25 23.8011 23.329 23.6103 23.4697 23.4697C23.6103 23.329 23.8011 23.25 24 23.25Z" fill="#28366D" />
  <path d="M24 13.5C24.9946 13.5 25.9484 13.8951 26.6517 14.5983C27.3549 15.3016 27.75 16.2554 27.75 17.25V18H20.25V17.25C20.25 16.2554 20.6451 15.3016 21.3483 14.5983C22.0516 13.8951 23.0054 13.5 24 13.5ZM29.25 18V17.25C29.25 15.8576 28.6969 14.5223 27.7123 13.5377C26.7277 12.5531 25.3924 12 24 12C22.6076 12 21.2723 12.5531 20.2877 13.5377C19.3031 14.5223 18.75 15.8576 18.75 17.25V18H13.5V33C13.5 33.7956 13.8161 34.5587 14.3787 35.1213C14.9413 35.6839 15.7044 36 16.5 36H31.5C32.2956 36 33.0587 35.6839 33.6213 35.1213C34.1839 34.5587 34.5 33.7956 34.5 33V18H29.25ZM15 19.5H33V33C33 33.3978 32.842 33.7794 32.5607 34.0607C32.2794 34.342 31.8978 34.5 31.5 34.5H16.5C16.1022 34.5 15.7206 34.342 15.4393 34.0607C15.158 33.7794 15 33.3978 15 33V19.5Z" fill="#28366D" />
</svg>

        </div>
        </div>
    </div>

  )
}

export default Card