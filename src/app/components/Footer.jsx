import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-gray-900 py-10 px-32 pt-10 flex justify-between '>
        <div>
          <span className='text-blue-500 text-xl'>

          Adornage
          </span>
          <ul>
            <li className='text-white my-4'>About</li>
            <li className='text-white my-4'>Contact Us</li>
            <li className='text-white my-4'>Feedback</li>
            <li className='text-white my-4'>FAQs</li>
          </ul>
        </div>
        <div>
          <span className='text-blue-500 text-xl'>

          Quick links
          </span>
          <ul>
            <li className='text-white my-4'>Login</li>
            <li className='text-white my-4'>Search</li>
            <li className='text-white my-4'>Sign Up</li>
          </ul>
        </div>
        <div>
          <span className='text-blue-500 text-xl'>

          Mobile and social
          </span>
          <ul className='flex'>
            <li className='text-white mx-2'>facebook</li>
            <li className='text-white mx-2'>twitter</li>
            <li className='text-white mx-2'>Youtube</li>
            <li className='text-white mx-2'>instagram</li>
          </ul>
        </div>
    </div>
    </>
  )
}
