import React from 'react';

const Hero06 = () => {
    return (
        <>
       <div className="bg-[#eaeaea] py-20">
       <div className='mt-[17.5%]'>
            <div className="space-y-5">
            <h1 className='text-3xl flex justify-center text-black font-bold'>Our Projects</h1>
            <img className='ml-[47.5%]' src="/img/Separator.png" alt="" />
            </div>
        </div>

        <div className="flex justify-between w-[50%] mx-auto mt-8">
            <div className="justify-items-center">
            <img src="/img/image 2.png" alt="" />
            <h1 className='text-2xl text-amber-400 font-bold -mt-10'>Alton Towers</h1>
            <p className='mt-8 text-black'>Lorem ipsum dolor sit amet, <br />
               consectetur adipiscing elit.</p>
            <h1 className='text-amber-300 mt-3'>View Project</h1>
            </div>
            <div className="justify-items-center">
                <img src="/img/image 5.png" alt="" />
                <h1 className='text-2xl text-amber-400 font-bold -mt-10 '>Keele University</h1>
                <p className='mt-8 text-black'>Lorem ipsum dolor sit amet, <br />
               consectetur adipiscing elit.</p>
            <h1 className='text-amber-300 mt-3'>View Project</h1>
            </div>
            <div className="justify-items-center">
                <img src="/img/image 4.png" alt="" />
                <h1 className='text-2xl text-amber-400 font-bold -mt-10 '>Keele University</h1>
                <p className='mt-8 text-black'>Lorem ipsum dolor sit amet, <br />
               consectetur adipiscing elit.</p>
            <h1 className='text-amber-300 mt-3'>View Project</h1>
            </div>
        </div>
        <div className="">
            <img className='flex ml-[24%] mt-10' src="/img/Card.png" alt="" />
        </div>
       </div>
        </>
        
    );
};

export default Hero06;