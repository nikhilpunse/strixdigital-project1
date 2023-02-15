import React from 'react'
import Header from './Header'
import Footer from './Footer'
import arrow from '../image/Arrow 1.png'
import Card from './Card'

const Collection = () => {
  return (
    <div>

        <section className='w-full flex justify-between p-1 sm:p-7 bg-slate-100 text-[10px] sm:text-[16px]'>
            <div className='flex items-center '>
                <div className='border border-slate-400 flex items-center py-1 px-3 font-semibold'>FILTER 
                <img className='h-3 mx-2' src={arrow}/>
                </div>
                <div className='text-slate-400 ml-3'>Clean all</div>

                <div className='flex items-center mx-3 font-semibold'>SORT BY: <div className='border border-slate-400 py-1 px-3 mx-3'> Sort by latest</div> </div>
            </div>
            <div className='flex items-center font-semibold'>SHOW <span className='border border-slate-300 p-2 mx-3'>12</span></div>
        </section>

        {/* Collection */}
        <section className='w-full flex'>
            <div className='w-[25vw] flex flex-col text-[12px] sm:text-[18px]'>
                <div className='w-full'>
                    <div className='w-full flex justify-between items-center sm:px-3 font-semibold text-[14px] sm:text-[20px]'>All Categories <span className='text-[44px] mx-2'>-</span></div>
                    <ul className='w-full flex flex-col pl-9'>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                    </ul>
                </div>

                <hr className='mt-2'/>

                <div className='w-full m-3'>
                    <div className='w-full font-semibold flex justify-between items-center px-3'>Price <span className='text-[44px] mx-2'>-</span></div>
                    <input className='w-full sm:w-fit h-1' type='range' min='0' maz='10' />
                    <p className='text-slate-400 text-[8px] sm:text-[14px]'>Price: RS.1,899 - RS.2,500</p>
                    <p className='w-fit text-white font-semibold text-[12px] sm:text-[18px] py-2 px-3 my-2 bg-[#B71C16] '>FILTER</p>
                </div>
                <hr className='my-2'></hr>

                <div className='w-full'>
                    <div className='w-full font-semibold flex justify-between items-center px-3'>Colors <span className='text-[44px] mx-2'>-</span></div>
                    <ul className='w-full flex flex-col pl-9'>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                        <li className='my-1'>anarkali</li>
                    </ul>
                </div>
            </div>

            

            {/* components */}
            <div className='w-[75vw] p-2 sm:p-9 border flex justify-around items-center flex-wrap'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </section>

        <Footer/>
    </div>
  )
}

export default Collection