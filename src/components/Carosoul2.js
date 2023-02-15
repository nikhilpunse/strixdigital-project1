import React from 'react'
import img3 from '../image/Rectangle 59.png'
import img1 from '../image/Rectangle 56.png'
import flouver3 from '../image/floral-design 1.png'

const Carosoul2 = () => {
  return (
    <div className='w-full'>
      <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active invisible"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      className='invisible'
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      className='invisible'
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      {/* custome code */}
      <div className='w-full bg-[#B71C1C] flex flex-col items-center'>
        <div className='flex flex-col items-center my-6'>
          <img  className='my-1' src={flouver3}/>
          <p className='mirza my-1 text-[40px] text-white font-semibold'>SHOP BY CATAGORY</p>
        </div>

        <p className='w-fit mx-auto text-white mirza text-[32px]'>01 BENGALI SAREE</p>
        <div className=' flex justify-between items-center w-full'>
          
          <img className='w-[80px] sm:w-[150px] md:w-[200px] lg:w-[260px]' src={img3}/>
          
          <img className='w-[180px] sm:w-[280px] md:w-[340px] lg:w-[448px] xl:w-[550px]' src={img1}/>

          <img className='w-[80px] sm:w-[150px] md:w-[200px] lg:w-[260px]  ' src={img3}/>

                 
        </div>

        <p className='w-fit mx-auto my-3 mb-10 text-white underline
        '>See all</p>
        
      </div>
    </div>
    <div className="carousel-item float-left w-full">
      
     {/* custome code */}
     <div className='w-full bg-[#B71C1C] flex flex-col items-center'>
        <div className='flex flex-col items-center my-6'>
          <img  className='my-1' src={flouver3}/>
          <p className='mirza my-1 text-[40px] text-white font-semibold'>SHOP BY CATAGORY</p>
        </div>

        <p className='w-fit mx-auto text-white mirza text-[32px]'>01 BENGALI SAREE</p>
        <div className=' flex justify-between items-center w-full'>
          
          <img className='w-[80px] sm:w-[150px] md:w-[200px] lg:w-[260px]' src={img3}/>
          
          <img className='w-[180px] sm:w-[280px] md:w-[340px] lg:w-[448px] xl:w-[550px]' src={img1}/>

          <img className='w-[80px] sm:w-[150px] md:w-[200px] lg:w-[260px]  ' src={img3}/>

                 
        </div>

        <p className='w-fit mx-auto my-3 mb-10 text-white underline
        '>See all</p>
        
      </div>
    </div>
    
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carosoul2