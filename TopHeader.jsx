import React from 'react';

const TopHeader = () => {
    return (
        <div className='bg-[#074222] py-1 items-center'>
            <div className='flex justify-between w-[70%] mx-auto '>
            <>
            <div className="flex gap-2">
                <h1>Email:</h1>
                <h1 className='text-amber-300'>info@arb.uk.com</h1>
            </div>
            <div className='flex gap-2'>
                <h1>Call Arb Today:</h1>
                <h1 className='text-amber-300'>01538756644</h1>
            </div>
            <div className='flex gap-2'>
                <h1>Emergency? Call:</h1>
                <h1 className='text-amber-300'>07968788009</h1>
            </div>
            </>
        </div>
        </div>
    );
};

export default TopHeader;