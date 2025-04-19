import React from 'react';

const Hero02 = () => {
    return (
        <>
      <div className='bg-[#f5f5f5]'>
      <div className='flex py-36 w-[60%] mx-auto justify-between items-center'>
         <div className='space-y-5'>
            <p className='text-3xl text-black'>ArB Tree Care Ltd is a professional, friendly <br />
               company, delivering a range of services which <br />
               include Tree Surgery, Forestry and Consultancy, <br />
               plus the sale of Firewood and Christmas trees.</p>
               <img src="/img/Separator.png" alt="" />
               <button className='bg-[#fbb03b] py-1.5 px-3 text-emerald-800 font-bold text-[100%] rounded-[15%] '>Learn More</button>
        </div>
        <div>
            <img src="/img/Image Showcase.png" alt="" />
        </div>
         </div>
      </div>
        </>
      
    
    );
};

export default Hero02;