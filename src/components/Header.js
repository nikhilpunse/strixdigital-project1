import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import flouver1 from "../image/floral-design (1) 1.png";
import flouver2 from "../image/floral-design (1) 2.png";

const Header = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full text-center bg-slate-400 text-[8px] md:text-[12px] py-1 font-bold">
        APPLY COUPON CODE 'AALNA-5' GET EXTRA 5% OFF | FREE SHIPPING ABOVE 4000
        INR
      </div>
      <div>
        <img className=" w-[90px] md:h-fit md:w-fit" src={logo} />
      </div>
      <div className="flex bg-[#B71C1C] w-full justify-center items-center py-1 text-white text-[15px] md:text-[18px]">
        <img className="mx-3" src={flouver1} />
        <Link to='/'><div className="mx-3">Home</div></Link>
        <Link to='/collection'><div className="mx-3">Collection</div></Link>
        <div className="mx-3">About</div>
        <Link to='/product'><div className="mx-3">Cart</div></Link>
        <img className="mx-3" src={flouver2} />
      </div>
    </div>
  );
};

export default Header;
