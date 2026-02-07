import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavBar = () => {
  const pathname =usePathname()
    const links =[
      { name: "Materiallar", pathname: "/material", isActive: false },
      { name: "mashina va mexanismlar", pathname: "/mashina-va-mexanismlar", isActive: false },
      { name: "Qurilish ishlari", pathname: "/qurilish-ishlari", isActive: false },
      { name: "Materiallar", pathname: "/materiallar-2", isActive: false },
      { name: "mashina va mexanismlar", pathname: "/mashina-va-mexanismlar-2", isActive: false },
      { name: "Qurilish ishlari", pathname: "/qurilish-ishlari-2", isActive: false },
      { name: "Materiallar", pathname: "/materiallar-3", isActive: false },
      { name: "mashina va mexanismlar", pathname: "/mashina-va-mexanismlar-3", isActive: false },
      { name: "Qurilish ishlari", pathname: "/qurilish-ishlari-3", isActive: false },
    ];
  return (
    <div className='bg-primary py-3'>
        <nav className='flex justify-between items-center gap-2 w-max-w mx-auto'>
            {links.map((val :{name:string; pathname:string; isActive:boolean}, index) =>{
              const isActive =pathname.includes(val.pathname)
              console.log(isActive)
            return  <Link href={`${val.pathname}`} key={index} className={`text-[#8D97AD] border-b border-transparent pb-1 font-medium ${isActive && "text-white border-white"}`}>{val.name}</Link>
            })}
        </nav>
    </div>
  )
}

export default NavBar
