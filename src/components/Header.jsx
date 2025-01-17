import React, { useState } from 'react'
import Proptype from 'prop-types'
function Header({ onSearch }) {
  const [textSearch, setSearch] = useState('')
  return <div className='p-4 bg-black flex items-center justify-between'>
    <div className='flex items-center space-x-4 '>
      <h1 className=' text-[30px] uppercase font-bold text-red-700'>Movie</h1>
      <nav className='flex items-center space-x-4'>
        <a href="#" className='text-white'>Home</a>
        <a href="#" className='text-white'>Ablout</a>
        <a href="#" className='text-white'>Contact</a>
      </nav>
    </div>
    <div className='flex space-x-4 items-center'>
      <input type="text" placeholder='Search' className='p-4 text-black' onChange={(e) => setSearch(e.target.value)} value={textSearch} />
      <button className='p-2 text-white bg-red-600' onClick={() => onSearch(textSearch)}>Search</button>
    </div>

  </div>
}

Header.prototype = {
  onSearch: Proptype.func,
}

export default Header