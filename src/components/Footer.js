import React from 'react'
import logo from '../image/logo.png'

const Footer = () => {
  return (
    <div className='w-full text-[12px] md:text-[20px]'>
         <footer className='bg-black text-white py-5 md:py-10 w-full'>
        <div className='flex flex-col sm:flex-row px-4 sm:px-0 py-3 '>
          <img className='hidden sm:block ml-6 sm:ml-12 md:ml-16 w-[100px] md:w-fit' src={logo}/>
          <div className='ml-6 sm:ml-12 md:ml-16 '>
            <p className='font-semibold mb-3 text-[18px] md:text-[24px]'>Contact us</p>
            <p>Phone:<span className='text-slate-400'>9865324578</span></p>
            <p>EMAIL:<span className='text-slate-400'>aalnashopping@gmail.com</span></p>
            <p>ADDRESS:<span className='text-slate-400'> 23/ 6B, A.C Road Bengluru <br/> 7000235</span></p>
          </div>
          <div className='ml-6 sm:ml-12 md:ml-16 text-slate-400 '>
            <p className='font-semibold mt-3 sm:mt-0 mb-3 text-[18px] md:text-[24px] text-white cursor-pointer'>Quick Links</p>
            <p className=' cursor-pointer' >About us</p>
            <p className=' cursor-pointer' >Term and condition</p>
            <p className=' cursor-pointer' >Saree</p>
            <p className=' cursor-pointer' >Home</p>
          </div>
        </div>
        <div className='bg-slate-600 h-[1px] w-[90vw] mx-auto my-8'></div>
        <div className='w-fit mx-auto text-slate-400'>AALNA ©  2023. ALL RIGHT RESERVED</div>
        </footer>
    </div>
  )
}

export default Footer