import React from 'react'
export default function Header() {
  return (
    <>    
    <div className='hero'>
      <nav className='flex justify-between mx-4 py-4'>
        <div className='mx-6 font-semibold text-lg logo1'> 
            <img src="./logo.png" alt="" />
        </div>
        <ul className='flex text-white'>
            <li className='mx-4 li1'>Home </li>
            <li className='mx-4 li2'>About Us</li>
            <li className='mx-4 li3'>Work</li>
            <li className='mx-4 li4'>Profile</li>
        </ul>
      </nav>
      <div>
        <div className='text-white font-semibold text-3xl flex justify-center mt-40'>
        # INDIA'S 1ST ONLINE PLATFORM CONNECTING ELDERLY WITH ORPHANAGES
        </div>
        <div className='text-white flex justify-center mb-32 mt-4'>
            <input className='p-2 px-4 h-12 w-1/3 rounded-l-lg' placeholder='Search' type="text" />
            <button type="submit" className='bg-blue-500 p-2 rounded-r-lg search'>Search</button>
        </div>
      </div>
    </div>
    </>

  )
}
