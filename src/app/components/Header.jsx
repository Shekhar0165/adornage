import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <>
      <div className="hero">
        <nav className="flex justify-between mx-4 py-4">
          <Link href="./">
            <div className="mx-6 font-semibold text-lg logo1">
              <img className="cursor-pointer" src="./logo.png" alt="" />
            </div>
          </Link>
          <ul className="flex text-white">
            <li className="mx-4 pt-3 li3 cursor-pointer">Home </li>
            <li className="mx-4 pt-3 li3 cursor-pointer">About Us</li>
            <li className="mx-4 pt-3 li3 cursor-pointer">Work</li>
            {/* <li className='mx-4 pt-3 li3 cursor-pointer'>Profile</li> */}
          </ul>
            <Link href="/createaccount">
          <div className="mx-4 text-white cursor-pointer flex">
              <span className="mx-4 py-3 px-4 bg-blue-500 rounded-lg libtn">
                Create Account
              </span>
          </div>
            </Link>
        </nav>
        <div>
          <div className="text-white font-semibold text-3xl flex justify-center mt-40">
            # INDIA'S 1ST ONLINE PLATFORM CONNECTING ELDERLY WITH ORPHANAGES
          </div>
          <div className="text-white flex justify-center mb-32 mt-4">
            <input
              className="p-2 px-4 h-12 w-1/3 rounded-l-lg text-black"
              placeholder="Search"
              type="text"
            />
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded-r-lg search"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
