import React from 'react'
import design from '../image/376-3761081_mandala-mandala-art-png 4.png'
import flouver3 from '../image/floral-design 1.png'
import box from '../image/—Pngtree—chinese style vector rectangular title_5467170 1.png'
import design2 from '../image/PngItem_549024 1.png'
import img1 from '../image/Rectangle 56.png'
import img2 from '../image/Rectangle 57.png'
import arrow from '../image/161-trending-flat-outline (1) 1.png'
import frame from '../image/pngfind 2.png'
import img3 from '../image/Rectangle 59.png'
import framepic from '../image/pic with frame.png'
import star from '../image/Star.png'
import Footer from './Footer'
import Carosoul from './Carosoul'
import Carosoul2 from './Carosoul2'
import knowmore from '../image/know more.png'
import addtocart from '../image/add to cart.png'

const Home = () => {
  return (
   <div className='flex flex-col items-center'>

      {/* hero image */}
      {/* <div className='w-full bg-[#0A1216] text-white flex justify-center pt-12 pb-12'>
      
        <div className='relative w-[528px] h-[528px] bg-[#B71C1C] rounded-[260px]'>
          <img className='absolute top-10 left-7' src={herodesign}/>
          <img className='absolute w-[632px] ml-4 mt-12' src={herimg}/>
          <img className='absolute bottom-2 -left-[240px] ' src={txt}/>
        </div>
      </div> */}
      <Carosoul/>

      <div className='relative w-full'>
        <img className='w-[270px] mx-auto md:w-[370px] lg:w-fit' src={design}/>
          <div className='absolute mirza top-8 right-5 flex flex-col justify-between items-center'>

            <img className='mt-6' src={flouver3}/>
            <p className='text-[#B71C1C] text-[26px] md:text-[40px] mb-6'>KNOW US BETTER</p>
            <div className='w-[90vw] mx-auto px-3'>
              <p className=' font-medium  text-center text-[16px] sm:text-[18px] md:text-[24px]'>Aims to bring you the traditional creativity and craftsmanship of Indian artisans. At Aalna, 
                we believe in simplicity, beauty and elegance and that is what we bring to life through all 
                  our products. We  bring to you handpicked pieces from across Indian states, from Bengal’s 
                Tussar Silk to Rajasthan’s block prints. A touch of magic added by its founder Shubha, makes
                  each piece one-of-its-kind and exclusive. Find the rich and diverse heritage of Indian
                    Handloom from across the country right here.</p>
            </div>
            
            <div>
              <img className='w-[120px] md:w-[180px] mt-5' src={knowmore}/>
            </div>
          </div>
      </div>

      {/* Shop by category */}
      {/* <div className='w-full bg-[#B71C1C] mt-80 flex flex-col items-center'>
        <div className='flex flex-col items-center my-6'>
          <img  className='my-1' src={flouver3}/>
          <p className='mirza my-1 text-[40px] text-white font-semibold'>SHOP BY CATAGORY</p>
        </div>

        <p className='w-fit mx-auto text-white mirza text-[32px]'>01 BENGALI SAREE</p>
        <div className=' flex justify-between items-center w-full'>
          
          <img className='w-[130px] sm:w-[150px] md:w-[200px] lg:w-[260px]' src={img3}/>
          
          <img className='w-[250px] sm:w-[280px] md:w-[340px] lg:w-[448px] xl:w-[550px]' src={img1}/>

          <img className='w-[130px] sm:w-[150px] md:w-[200px] lg:w-[260px]  ' src={img3}/>

                 
        </div>

        <p className='w-fit mx-auto my-3 mb-10 text-white underline
        '>See all</p>
        
      </div> */}
      <div className='mt-80'></div>
      <Carosoul2/>

      {/* Make traditional component */}
      <div className='relative flex flex-col items-center mb-10'>
        <img className='w-[270px] mx-auto md:w-[370px] lg:w-fit' src={design}/>
        <div className='absolute top-6 md:top-16 flex flex-col items-center'>
          <img className='my-3' src={flouver3}/>
          <p className='mirza text-[28px] md:text-[40px] text-[#B71C1C] font-bold'>LETS MAKE IT TRADITIONAL</p>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-evenly items-center'>
          {/* card */}
          <div className='relative mx-4 mb-3 sm:mb-0'>
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

          <div className='relative mx-4 mb-3 sm:mb-0'>
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

          <div className='relative mx-4 mb-3 sm:mb-0'>
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
      </div>
   
     <Footer/>

   </div>
  )
}

export default Home