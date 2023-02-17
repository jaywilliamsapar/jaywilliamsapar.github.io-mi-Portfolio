import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#172d4e]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-400 font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-red-400' >Jay William</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#9398a8]'>I'm a Front-End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Full-stack developer specializing in building 
                (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
            </p>

            <div>
              <Link  to="project" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-400'>
                    View Projects
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='animate-bounce w-6 h-6 ml-3'/>
                  </span>
                </button>
              </Link>
            </div>
        </div>

        
      
    </div>
  )
}

export default Home
