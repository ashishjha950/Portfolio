import React from 'react';
import { BiCodeBlock, BiCoinStack, BiCross, BiSolidBookContent } from 'react-icons/bi';

function About() {
  return (
    <div id='aboutus' className='h-full w-full mt-20 md:mt-6 lg:mt-2 text-white'>
      {/* Heading */}
      <div className='relative'>
        <h1 className='text-4xl md:text-6xl text-center font-bold'>About Me</h1>
        <BiCross className='animate-spin text-5xl absolute -bottom-10 right-10' />
        <BiCross className='animate-bounce text-3xl absolute -bottom-96' />
      </div>

      {/* About Text */}
      <h1 className='w-full md:w-4/5 lg:w-3/5 xl:w-1/2 my-10 m-auto text-sm sm:text-base text-center text-gray-300'>
        I'm a Full-stack Developer specializing in the MERN stack and Next.js. Proficient in React.js, Node.js, Express.js, and MongoDB, I build scalable, responsive, and user-centric web applications.
        <br /><br />
        I have hands-on experience with state management (Redux Toolkit, Zustand), navigation (React Router DOM), and real-time communication using WebSockets and Socket.io.
        <br /><br />
        I'm also well-versed with tools like Git, GitHub, Postman, NPM, and deployment platforms like Vercel, Render, and MongoDB Atlas. Passionate about clean code, modern UI, and solving real-world problems through web technologies.
      </h1>

      {/* Services */}
      <div className='min-h-60 w-full lg:w-11/12 m-auto flex flex-wrap justify-around items-center'>
        {/* Frontend */}
        <div className='h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 mx-4 box duration-300 rounded-lg shadow-xl shadow-gray-900'>
          <BiCodeBlock className='text-4xl md:text-5xl pt-4 m-auto' />
          <h1 className='text-lg md:text-xl text-center font-semibold py-2'>Frontend Development</h1>
          <p className='text-xs sm:text-sm px-1 text-gray-400 text-center'>
            Skilled in React.js, JavaScript, HTML, CSS, and Tailwind CSS. Experienced with Context API, Zustand, and Redux Toolkit to create responsive and intuitive interfaces.
          </p>
        </div>

        {/* Backend */}
        <div className='h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 mx-4 box duration-300 rounded-lg shadow-xl shadow-gray-800'>
          <BiCoinStack className='text-4xl md:text-5xl pt-4 m-auto' />
          <h1 className='text-lg md:text-xl text-center font-semibold py-2'>Backend Development</h1>
          <p className='text-xs sm:text-sm px-1 text-gray-400 text-center'>
            Proficient in Node.js, Express.js, and MongoDB. Experienced in building REST APIs, authentication systems, and real-time features using WebSockets and Socket.io.
          </p>
        </div>

        {/* Web Design */}
        <div className='h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 mx-4 box duration-300 rounded-lg shadow-xl shadow-gray-900'>
          <BiSolidBookContent className='text-4xl md:text-5xl pt-4 m-auto' />
          <h1 className='text-lg md:text-xl text-center font-semibold py-2'>Web Design</h1>
          <p className='text-xs sm:text-sm px-1 text-gray-400 text-center'>
            Passionate about clean and modern UI design using Tailwind CSS, HTML, and CSS. Familiar with Figma for prototyping and layout planning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
