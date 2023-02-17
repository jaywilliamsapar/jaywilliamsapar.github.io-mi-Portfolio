import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaDribbble, FaDiscord} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/jLogo.png';
import Logo1 from '../assets/jLogo.png';
import Logo2 from '../assets/jLogo.png';
import Logo3 from '../assets/jLogo.png';
import myLog from '../assets/myLog.png';
import hiLogo from '../assets/hiLogo.png';
import {Link} from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#172d4e] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Images" className='mt-16' style={{ width: '200px' }}/>
      </div>

      {/* Menu */}
      <div>
        <ul className='hidden md:flex' animate-bounce>
          <li><Link  to="home" smooth={true} duration={600}>
            Home
         </Link>
        </li>
          <li><Link  to="about" smooth={true} duration={500}>
            About
         </Link></li>
          <li><Link  to="skills" smooth={true} duration={500}>
            Skills
         </Link></li>
          <li><Link  to="project" smooth={true} duration={500}>
            Projects
         </Link></li>
          <li><Link  to="contact" smooth={true} duration={500}>
            Contact
         </Link></li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        <FaBars />
      </div>

      {/* 🤖🙂Mobile Menu */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl' >
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Projects
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
         </Link></li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/williamsapar/">
                Linkedin <FaLinkedin size={30} /> 
              </a>
            </li>
            <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/jaywilliamsapar">
                GitHub <FaGithub size={30} /> 
              </a>
            </li>
            <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5d95de]'>
              <a  className='flex justify-between items-center w-full text-gray-300'
              href="/">
                Email <HiOutlineMail size={30} /> 
              </a>
            </li>
            <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
                Resume <BsFillPersonLinesFill size={30} /> 
              </a>
            </li><li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-700'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="https://discord.com/channels/@me">
                Discord <FaDiscord size={30} /> 
              </a>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar


