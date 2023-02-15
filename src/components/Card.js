import React from 'react'
import frame from '../image/pngfind 2.png'
import img3 from '../image/Rectangle 59.png'
import star from '../image/Star.png'
import box from '../image/—Pngtree—chinese style vector rectangular title_5467170 1.png'
import framepic from '../image/pic with frame.png'
import addtocart from '../image/add to cart.png'

const Card = () => {
  return (
    <div>
         
          {/* card */}
          <div className='relative mx-4 mb-3 w-24 sm:w-44'>
              <img src={framepic}/>
              <div className='text-[10px] text-[#A7A7A7] mt-3'>SAREE, SHOP BY COLLECTION, WEDDING DRESS</div>
              <div className='text-[15px] md:text-[18px]'>GULABO</div>
              <div className='font-bold text-[18px] md:text-[20px]'>RS. 1,889.00</div>
              <div className='flex items-center' >
                <img className='w-2 h-2 md:w-3  md:h-3' src={star}/>
                <img className='w-2 h-2 md:w-3  md:h-3' src={star}/>
                <img className='w-2 h-2 md:w-3  md:h-3' src={star}/>
                <img className='w-2 h-2 md:w-3  md:h-3' src={star}/>
                <img className='w-2 h-2 md:w-3  md:h-3' src={star}/>
                <div className='mx-1 text-[12px] md:text-[16px] my-[5px] md:my-1 text-[#A7A7A7]'>0 review</div>
              </div>
              <div className=''>
                  <img className='w-[100px] md:w-[120px]' src={addtocart}/>
              </div>
          </div>
    </div>
  )
}

export default Card