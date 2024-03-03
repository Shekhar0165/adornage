import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
         <nav className="flex justify-between mx-4 py-4">
          <Link href="/">
            <div className="mx-6 font-semibold text-lg logo1">
              <img className="cursor-pointer" src="../logo.png" alt="" />
            </div>
          </Link>
          <ul className="flex text-blue-500">
            <li className="mx-4 pt-3 li3 cursor-pointer">Home </li>
            <li className="mx-4 pt-3 li3 cursor-pointer">About Us</li>
            <li className="mx-4 pt-3 li3 cursor-pointer">Work</li>
            {/* <li className='mx-4 pt-3 li3 cursor-pointer'>Profile</li> */}
          </ul>
           
        </nav>
    </>
  )
}
