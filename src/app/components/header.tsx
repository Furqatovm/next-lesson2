"use client"

import React from 'react'
import Location from '../assets/location'

import Logo from "../assets/logo.png"
import Image from 'next/image'
import Search from '../assets/search'
import Save from '../assets/save'
import Profile from '../assets/profile'
import NavBar from './nav'
const Header = () => {
  return (
    <header>
        <div className='bg-[#182041]'>
        <div className=' text-white  w-max-w mx-auto py-2 text-[14px] flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <Location />

                <select name="dad" id="">
                    <option>Samarqand</option>
                    <option>Samarqand</option>
                    <option>Samarqand</option>
                </select>
            </div>


            <div className='flex gap-6 items-center'>
                    <span>Yo'riqnoma</span>
                <select name="" id="">
                    <option>uz</option>
                    <option>uz</option>
                    <option>uz</option>
                </select>
            </div>

        </div>

        </div>


        <div className='bg-[#202B57] py-4  text-white'>
            <div className='w-max-w  flex justify-between items-center mx-auto'>
                <div className='flex gap-4 items-center w-[25%]'>
                    <Image  src={Logo} width={60} alt="" />
                    <span className='text-white font-bold'>Qurilishda texnik me’yorlash
va standartlashtirish 
ilmiy-tadqiqot instituti</span>
                </div>
                <div className='flex gap-4 items-center w-[25%]'>

                    <Search />
                    <Save />
                    <Save />
                    <div className='flex items-center gap-2'>
                        <Profile />
                        <span>Kirish
                        Ro’yhatdan o’tish</span>
                    </div>
                </div>
            </div>
        </div>
        <NavBar />
     
    </header>
  )
}

export default Header