import { Card } from 'antd'
import React from 'react'

const DetailBottom = () => {
  return (
    <div className='grid grid-cols-3 gap-6'>
            <Card>
                <span className='block mb-2 text-primary font-medium'>Davlat soliq qo’mitasi</span>
                <div className='flex my-1 justify-between items-center text-[12px] text-[#000000B2]'>
                    <span>O’tgan oydagi savdolar hajmi: </span>
                    <span>10</span>
                </div>
                <div className='flex justify-between items-center text-[12px] text-[#000000B2]'>
                    <span>O’rtacha narx: </span>
                    <span>25</span>
                </div>
            </Card>

            <Card>
                <span className='block mb-2 text-primary font-medium'>Tovar xom-ashyo birjasi</span>
                <div className='flex my-1 justify-between items-center text-[12px] text-[#000000B2]'>
                    <span>O’tgan oydagi savdolar hajmi (4 hafta): </span>
                    <span className='font-medium'>10</span>
                </div>
                <div className='flex justify-between items-center text-[12px] text-[#000000B2]'>
                    <span>O’rtacha narx: </span>
                    <span>25</span>
                </div>
            </Card>

            <Card>
                <span className='block mb-2 text-primary font-medium'>Davlat soliq qo’mitasi</span>
                <div className='flex my-1 justify-between items-center text-[12px] text-[#000000B2]'>
                    <span>O’tgan oydagi savdolar hajmi: </span>
                </div>
              
            </Card>

            
    </div>
  )
}

export default DetailBottom