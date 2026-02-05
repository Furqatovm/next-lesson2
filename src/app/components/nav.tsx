import React from 'react'

const NavBar = () => {
    const links:string[] =[
        "Materiallar",
        "mashina va mexanismlar",
        "Qurilish ishlari",
        "Materiallar",
        "mashina va mexanismlar",
        "Qurilish ishlari",
        "Materiallar",
        "mashina va mexanismlar",
        "Qurilish ishlari",
    ]
  return (
    <div className='bg-[#28366D] py-3'>
        <nav className='flex justify-between items-center gap-2 w-max-w mx-auto'>
            {links.map((val, index) =><span key={index} className='text-[#8D97AD] font-medium'>{val}</span>)}
        </nav>
    </div>
  )
}

export default NavBar
