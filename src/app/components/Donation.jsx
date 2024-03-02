import React from 'react'

export default function Donation() {
  return (
    <>
        <div className='mx-20 bg-white'>
            <div className='text-2xl my-4 mx-32 text-gray-500'>
                DONATIONS
            </div>
            <div className=' flex justify-evenly'>
                <div className='w-40 h-40 borde rounded-full'>
                    <img src="./rupee.png" alt="" />
                </div>       
                <div className='w-40 h-40 borde rounded-full'>
                <img className=''  src="./clothes.png" alt="" />
                </div>       
                <div className='w-40 h-40 borde rounded-full'>
                <img  src="./books.png" alt="" />
                </div>       
                <div className='w-40 h-40 borde rounded-full'>
                <img className='' src="./food1.png" alt="" />
                </div>       
            </div>
        </div>
    </>
  )
}
