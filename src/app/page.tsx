import React from 'react'
import Search from './components/search'
import SearchLeft from './components/search/left'
import SearchRight from './components/search/searchright'

const Home = () => {
  return (
    <section className='w-max-w mx-auto'>
        <h1 className='text-[#202B57] text-[1.5rem] font-medium text-center w-max-w mx-auto'>Qurilish resurslari Klassifikatori</h1>
        <Search />

        <div className='grid grid-cols-[1fr_2.5fr] gap-8 mt-8'>
          <SearchLeft />
          <SearchRight />
        </div>  
    </section>
  )
}

export default Home