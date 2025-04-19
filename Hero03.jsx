import React from 'react';

const Hero03 = () => {
    return (
       <>
        <div className="bg-[#eaeaea]">
        <div className="py-24">
        <div className='space-y-5'>
            <h1 className='flex justify-center font-bold text-3xl text-black'>Services We Offer</h1>
            <img className='ml-[47%]' src="/img/Separator.png" alt="" />
        </div>
        <div className='space-y-14 mt-10 justify-items-center'>
            <img src="/img/Services Line 1.png" alt="" />
            <img src="/img/Services Line 1.png" alt="" />
        </div>
        <div className="bg-[#f5f5f5] py-4 w-[70%] mx-auto rounded-2xl mt-16">
        <div className="flex gap-16 justify-center">
            <h1 className='text-3xl font-bold text-black '>Need help deciding?</h1>
            <button className='bg-[#fbb03b] py-2 px-5 text-emerald-800 font-bold text-[100%] rounded-[10%] '>Contact Us</button>
        </div>
        </div>
        
        </div>
        
        </div>

    
       </>

    );
};

export default Hero03;