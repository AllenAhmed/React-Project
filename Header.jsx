import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#ffffff] py-2'>
            <div className='flex justify-between w-[90%] mx-auto '>
            <>
            <div className='flex gap-5 items-center'>
                <img src="/img/Logo.png" alt="" />
                <h1 className='text-black'>ArB Tree Care LTD</h1>
            </div>
           <div className='flex gap-28 items-center'>
           <div className='flex gap-28'>
                <h1 className='text-amber-300'>Home</h1>
                <h1 className='text-black'>About Us</h1>
            </div>
            <div className='flex gap-1'>
                <h1 className='text-black'>Services</h1>
                <img className='w-3 h-3 mt-1' src="/img/chevron-down.png" alt="" />
            </div>
            <div className='flex gap-1'>
                <h1 className='text-black'>Sales</h1>
                <img className='w-3 h-3 mt-1' src="/img/chevron-down.png" alt="" />
            </div>
            <div>
                <h1 className='text-black'>Projects</h1>
            </div>
            <div>
                <button className='bg-[#fbb03b] py-1 px-3 text-emerald-800 font-bold text-[100%] rounded-[10%] '>Contact Us</button>
            </div>
           </div>
            </>
        </div>
        </div>
    );
};

export default Header;