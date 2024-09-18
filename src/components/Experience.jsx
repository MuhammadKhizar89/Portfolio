import React from "react";

const Experience = () => {
    return (
        <div className="-mx-2 md:-mx-0" id="Experience">
            <div className="py-10  flex flex-col bg-[#232325]">
                <h2 className="mb-8 text-3xl text-white text-center">
                    My <span>Experience</span>
                </h2>
                <div className="mb-[20px] self-center text-white relative bg-gray-800/20 p-4 rounded-3xl max-w-[600px] ">
                    <p>0 Company</p>
                    <p className="text-gray-400">(2024June -2024July)</p>
                    <p className="text-gray-500">Axtra Software</p>
                </div>
     {/* <div className='h-[50px] w-[2px] bg-slate-400 my-l mx-auto'></div>
        <div className='mb-[20px] self-center text-white relative bg-gray-800/20 p-4 rounded-3xl max-w-[600px] '>
            <p>First Company</p>
            <p className='text-gray-400'></p>
            <p className='text-gray-500' >
                Description of your Experience in this Company
            </p>
        </div>
    */}
    
            </div>
        </div>
    );
};

export default Experience;
