import Image from 'next/image'
import React from 'react'
import Logo from "../assets/logo.png"
import { Button, Input } from 'antd'


const Footer = () => {
  return (
    <footer className='bg-primary text-white mt-10'>
        <div className='w-max-w mx-auto py-6 gap-20 grid grid-cols-[1fr_1fr_2fr]'>
            <div className='flex flex-col gap-4 items-start'>
            <div className='flex gap-4 items-center'>
                    <Image  src={Logo} width={60} alt="" />
                    <span className='text-white font-bold'>Qurilishda texnik me’yorlash
va standartlashtirish 
ilmiy-tadqiqot instituti</span>
                </div>
                <span className='text-normal'>
                Qurilish materiallari, mashina va mexanizmlari, ish turlari elektron portali
                </span>

                <span className='font-semibold'>
                Bizni ijtimoiy tarmoqlarda kuzating:
                </span>
                <div className='flex gap-2 items-center'>
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_1_6204)">
    <path d="M7 9.92602V13.8964H10V20.8447H14V13.8964H17L18 9.92602H14V7.94081C14 7.67755 14.1054 7.42508 14.2929 7.23893C14.4804 7.05278 14.7348 6.9482 15 6.9482H18V2.97778H15C13.6739 2.97778 12.4021 3.50067 11.4645 4.43142C10.5268 5.36217 10 6.62453 10 7.94081V9.92602H7Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_6204">
      <rect width={24} height="23.8225" fill="white" />
    </clipPath>
  </defs>
</svg>

  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_6201)">
      <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1_6201">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_6197)">
      <path d="M17 5H7C4.79086 5 3 6.79086 3 9V15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15V9C21 6.79086 19.2091 5 17 5Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9L15 12L10 15V9Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1_6197">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_6192)">
      <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 7.5V7.501" stroke="#1890FF" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1_6192">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
</div>


<span className='text-[12px]'>
All rights reserved © 2022
</span>



            </div>
            <div className='flex flex-col gap-3'>
                <span className='font-bold text-[20px]'>Menu</span>
                <span className='text-third'>Qurilish materiallari</span>
                <span>Qurilish materiallari</span>
                <span>Qurilish ishlari</span>
                <span>Korxonalar</span>
                <span>Klassifikator</span>
                <span>Yangiliklar</span>
                <span>Aloqa</span>
            </div>


            <div>
                <div className='w-[60%] ml-auto flex flex-col gap-2'>
                <span>Qurilish materiallari</span>
                <span className='text-[12px]'>Tezkor yangiliklar e-mail orqali</span>

                <div className='flex flex-col gap-4'>
                <Input  />
                <Button style={{background:"#1890FF", borderColor:"#1890FF", color:"white"}} block>Obuna bo‘lish</Button>
                </div>
                </div>
            </div>
            </div>

        
    </footer>
  )
}

export default Footer