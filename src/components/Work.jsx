import React from 'react';


import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import LegalHome from '../assets/LegalHome.jpg';
import White from '../assets/white.png';
import xWhite from '../assets/xwhite.jpg';
import Cars from '../assets/cars.jpg';
import JWS from '../assets/jws.png';

const Work = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#172d4e]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-400'>Projects</p>
            <p className='py-6'>\\ Check out some of my recent projects</p>
        </div>

        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Items */}  
                <div style={{backgroundImage: `url(${LegalHome})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://jwilliamsapar.my.canva.site/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${realEstate})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${White})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://jwilliamsapar.my.canva.site/white-photocentric-food-and-restaurant-bio-link-website">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${JWS})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${Cars})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-400 text-gray-600 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <button className='text-white border-2 hover:bg-red-400 hover:border-red-400 px-4 py-3 my-10 mx-auto animate-bounce w-30'>View more projects</button>
      </div>
    </div>
  )
}

export default Work
