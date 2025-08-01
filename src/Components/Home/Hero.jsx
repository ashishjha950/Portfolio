import React from 'react'
import { BiArrowBack, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { Link } from 'react-scroll'
import profilePic from '../../assets/images/professionalImage.png'

function Hero() {
  return (
    <div id='home' className='h-full w-full md:w-[90%] lg:h-[90vh] lg:w-full md:pl-10 lg:pl-0 pt-0 sm:pt-10 lg:py-36 my-10 md:my-20 lg:my-0 flex items-center justify-center lg:flex-row flex-col gap-10' >
      <div className='h-full w-full lg:w-1/2 text-center md:text-start' >
        <div className='w-[95%] font-bold mb-6' >
          <h1 className='text-3xl sm:text-4xl md:text-6xl' >I'm <span className='textcolor'>Ashish Kumar Jha</span></h1>
          <h1 className='w-full lg:w-[80%] text-lg sm:text-3xl md:text-4xl'>
            Full-stack MERN & Next.js Developer | Real-time Web & Scalable App Specialist
          </h1>
          </div>
          <p className='text-xs md:text-sm md:w-[65%] lg:w-[50%] text-center md:text-start text-gray-400'>
            Specialized in MERN and Next.js, with a focus on scalable, high-performance apps. Experienced in real-time technologies like WebSockets and WebRTC for interactive user experiences.
          </p>

        <div className='w-full flex justify-center md:justify-start items-center mt-4' >
          <a href="https://www.linkedin.com/in/ashish-kumar-jha-b47955288/">
            <BiLogoLinkedin className='text-2xl' />
          </a>
          <a href="https://github.com/ashishjha950">
            <BiLogoGithub className='text-2xl mx-2' />
          </a>
        </div>
        <div className='w-full' >
          <Link to='contact' smooth={true} offset={-80} duration={500} className='btn h-10 w-36 mt-5 m-auto md:ml-0 rounded-md flex justify-center items-center text-base font-semibold bg-purple-700 text-white cursor-pointer' >Contact Me <BiArrowBack className='text-xl font-bold ml-2' /> </Link>
        </div>

      </div>
      <div >
        <img className='p-2 bg-black border border-white rounded-full' src={profilePic} width={250} loading='lazy' alt="profilePic" />
      </div>
    </div>
  )
}

export default Hero