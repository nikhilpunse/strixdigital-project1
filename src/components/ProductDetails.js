import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img1 from '../image/Rectangle 81.png'
import img2 from '../image/Rectangle 89.png'
import img3 from '../image/Rectangle 57.png'

const ProductDetails = () => {
  return (
    <div>
        <div className='p-7'>Home / Collection / Bengali Saree</div>
        <div className='flex justify-evenly'>
            <div className='hidden sm:block'>
                <img className='my-4' src={img1}/>
                <img className='my-4' src={img1}/>
                <img className='my-4' src={img1}/>
            </div>
            <div className='w-[567px] mx-2'>
                <img className='w-[567px] mb-3' src={img3}/>
                <img className='w-[567px] mb-3' src={img2}/>
            </div>
            <div className='w-[180px] sm:w-[280px] md:w-[380px] lg:w-[480px] p-3'>
                <h1 className='mirza text-[18px] sm:text-[30px] font-bold'>BEIGE & INDIGO COTTON BLOCK PRINT HANDCRAFTED AJRAKH DUPATTA SET</h1>
                <p className='text-[14px] sm:text-[18px] my-1'>GULABO</p>
                <p className='text-[18px] sm:text-[24px] font-semibold'>RS. 1,899.00</p>
                <hr className='w-[400px] my-8' />
                <div className='flex justify-evenly items-center text-[14px] sm:text-[18px] border border-slate-400 w-3/4 '>
                    <p className='text-lg cursor-pointer p-1'>-</p>
                    <p className=''>Quantity</p>
                    <p className='text-lg cursor-pointer p-1'>+</p>
                </div>
                <p className='my-3 text-[14px] sm:text-[18px]'>Avaibility : <span className='text-[#B71C16]'></span> 3 in stock</p>
                <div className='w-10/12 border text-center py-2 my-2 bg-[#B71C16] text-white cursor-pointer'>Add to cart</div>
                <div className='w-10/12 border border-slate-400 text-center py-2 my-2 cursor-pointer'>Buy it now</div>

                <div className='mt-9 monserate text-[12px] sm:text-[16px] '><div >BEIGE COTTON HANDBLOCK PRINT SHIRT AND BLUE PLAIN BOTTOM paired with aN INDIGO ajrakh block print hand embroidered dupatta, accessorised with hand crafted tassles. <br/>
                BEIGE COTTON HANDBLOCK PRINT SHIRT AND BLUE PLAIN BOTTOM paired with aN INDIGO ajrakh block print hand embroidered dupatta, accessorised with hand crafted tassles.</div> <br/>
                <div >BEIGE COTTON HANDBLOCK PRINT SHIRT AND BLUE PLAIN BOTTOM paired with aN INDIGO ajrakh block print hand embroidered dupatta, accessorised with hand crafted tassles.</div> <br/>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductDetails