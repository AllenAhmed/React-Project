import React from 'react';

const Hero04 = () => {
    return (
        <>
       <div className="bg-[#f5f5f5]">
        <div className="py-24">
        <div className="space-y-10">
       <div className="space-y-5">
            <h1 className='text-3xl font-bold flex justify-center text-black'>Why Choose Us?</h1>
            <img className='ml-[48%]' src="/img/Separator.png" alt="" />
        </div>
        <div className="flex justify-between w-[70%] mx-auto">
            <img src="/img/Figure 1.png" alt="" />
            <img src="/img/Figure 2.png" alt="" />
            <img src="/img/Figure 3.png" alt="" />
            <img src="/img/Figure 4.png" alt="" />
        </div>
       </div>


       <div className="bg-[#ffffff] py-5 w-[60%] mx-auto mt-14 rounded-2xl">
       <div className="">
        <img className='ml-[17%]' src="/img/Check Circle Line.png" alt="" />
       </div>
       <div className="flex justify-between w-[80%] mx-auto mt-5">
        <button className='btn btn-accent bg-[#f5f5f5] px-10 text-[20px] rounded-2xl text-black border '>Cost effective solutions</button>
        <button className='btn btn-accent bg-[#f5f5f5] px-10 text-[20px] rounded-2xl text-black border'>Friendly, professional staff</button>
        <button className='btn btn-accent bg-[#f5f5f5] px-10 text-[20px] rounded-2xl text-black border'>Consistent results</button>
       </div>
       <div className="flex justify-between w-[60%] mx-auto mt-5">
       <button className='btn btn-accent bg-[#f5f5f5] px-10 text-[20px] rounded-2xl text-black border'>Safe, accredited contractor</button>
       <button className='btn btn-accent bg-[#f5f5f5] px-10 text-[20px] rounded-2xl text-black border'>Reliable communication</button>
       </div>
       </div>
        </div>
       </div>
        </>
    );
};

export default Hero04;