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
          <ul className='flex my-2'>
            <li className='text-white mx-2 cursor-pointer'><img className='w-5 h-5' src="./facebook.png" alt="" /></li>
            <li className='text-white mx-2 my-1 cursor-pointer'><img className='w-5 h-5' src="./instagram.png" alt="" /></li>
            <li className='text-white mx-2 my-1 cursor-pointer'><img className='w-5 h-5' src="./twitter.png" alt="" /></li>
            <li className='text-white mx-2 my-1 cursor-pointer'><img className='w-5 h-5' src="./youtube.webp" alt="" /></li>
          </ul>
        </div>
    </div>
    </>
  )
}
