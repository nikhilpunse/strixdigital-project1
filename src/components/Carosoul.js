import React from "react";
import herimg from "../image/pngwing 1.png";
import herodesign from "../image/Group 4.png";
import txt from "../image/INDIAN BRIDE.png";
const Carosoul = () => {
  return (
    <div className="w-full">
      {/* Custom code */}
      {/* <div className='w-full bg-[#0A1216] text-white flex justify-center pt-12 pb-12'>
        <div className='relative w-[528px] h-[528px] bg-[#B71C1C] rounded-[260px]'>
          <img className='absolute top-10 left-7' src={herodesign}/>
          <img className='absolute w-[632px] ml-4 mt-12' src={herimg}/>
          <img className='absolute bottom-2 -left-[240px] ' src={txt}/>
        </div>
      </div> */}
      <div></div>

      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            {/* Custom code */}
            <div className="w-full bg-[#0A1216] text-white flex justify-center pt-12 pb-12">
              <div className="relative w-[340px] h-[340px] md:w-[528px] md:h-[528px] bg-[#B71C1C] rounded-[260px]">
                <img className="absolute top-4 left-4 w-[300px] md:w-fit md:top-10 md:left-7" src={herodesign} />
                <img className="absolute w-[450px] md:w-[632px] ml-4 mt-12" src={herimg} />
                <img className="absolute bottom-1 -left-10 md:bottom-2 md:-left-13 lg:bottom-2 lg:-left-[240px] w-[110px] md:w-[160px] lg:w-fit " src={txt} />
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            {/* Custom code */}
            <div className="w-full bg-[#0A1216] text-white flex justify-center pt-12 pb-12">
              <div className="relative w-[340px] h-[340px] md:w-[528px] md:h-[528px] bg-[#B71C1C] rounded-[260px]">
                <img className="absolute top-4 left-4 w-[300px] md:w-fit md:top-10 md:left-7" src={herodesign} />
                <img className="absolute w-[450px] md:w-[632px] ml-4 mt-12" src={herimg} />
                <img className="absolute bottom-1 -left-10 md:bottom-2 md:-left-13 lg:bottom-2 lg:-left-[240px] w-[110px] md:w-[160px] lg:w-fit " src={txt} />
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
           {/* Custom code */}
           <div className="w-full bg-[#0A1216] text-white flex justify-center pt-12 pb-12">
              <div className="relative w-[340px] h-[340px] md:w-[528px] md:h-[528px] bg-[#B71C1C] rounded-[260px]">
                <img className="absolute top-4 left-4 w-[300px] md:w-fit md:top-10 md:left-7" src={herodesign} />
                <img className="absolute w-[450px] md:w-[632px] ml-4 mt-12" src={herimg} />
                <img className="absolute bottom-1 -left-10 md:bottom-2 md:-left-13 lg:bottom-2 lg:-left-[240px] w-[110px] md:w-[160px] lg:w-fit " src={txt} />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carosoul;
