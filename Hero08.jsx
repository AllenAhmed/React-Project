import React from 'react';

const Hero08 = () => {
    return (
        <div className='bg-[#eaeaea] py-20'>
            <div className="space-y-5">
                <h1 className='text-3xl text-black font-bold flex justify-center'>Latest News From ArB</h1>
                <img className='ml-[47.5%]' src="/img/Separator.png" alt="" />
            </div>
            <div className="flex justify-between w-[55%] mx-auto items-center mt-10">
                <img src="/img/Article 1.png" alt="" />
                <img src="/img/Article 2.png" alt="" />
                <img src="/img/Article 3.png" alt="" />
                <div className="space-y-4">
                    <img className='fle justify-center items-center ml-7' src="/img/Chevron.png" alt="" />
                    <img src="/img/Learn More Btn.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero08;