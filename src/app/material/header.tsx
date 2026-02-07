import { Select } from 'antd'
import React from 'react'
import { ButtonStyle } from '../../../@types'

const {Option} =Select

const MaterialHeader = () => {
  return (
    <div className='flex justify-between items-center my-8'>
        <div>
            <span className='text-primary text-[1.5rem] font-semibold block uppercase'>mahsulotlar</span>
            <span className='text-[#4B5055] text-[14px] '>2548 natija topildi</span>
        </div>

        <div className='text-[14px] text-primary flex gap-6 items-center'>
            <div className='flex gap-3 items-center'>
                <span>Shahar / viloyat</span>
                <Select defaultValue={"Barchasi"} style={{width:200}} >
                    <Option value ="all">Barchasi</Option>
                </Select>
            </div>

            <div className='flex gap-3 items-center'>
                <span>Tuman</span>
                <Select defaultValue={"Barchasi"} style={{width:200}} >
                    <Option value="all">Barchasi</Option>
                </Select>
            </div>
        </div>
    </div>
  )
}

export default MaterialHeader