import projects from '../../assets/Data/frontendProject'
import { BiCircle, BiStar } from 'react-icons/bi'

function FrontendWork() {

  return (
    <div id='latestwork' div className=' relative m-auto my-20'>
      <div className='m-auto text-center relative'>
        <h1 className='text-3xl md:text-5xl font-semibold py-7'>My Frontend Work</h1>
        <BiStar className=' animate-spin text-2xl absolute bottom-0' />
      </div>
      <BiCircle className='text-5xl animate-pulse absolute bottom-0 right-10' />
      <BiCircle className='text-4xl animate-pulse absolute bottom-6 right-10' />

      <div className='h-full w-full xl:w-11/12 m-auto flex flex-wrap justify-between items-start ' >
        {
          projects.map((val, ind) => (
            <div key={ind} className='h-auto w-96 sm:w-[48%] m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4 ' >
              <a href={val.projectView} className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto' >
                <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg object-cover ' src={val.projectImg} />
              </a>
              <div className='h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2' >
                <h1 className='text-base font-semibold pb-1' >{val.projectTitle}</h1>
                <p>{val.projectDescription}</p>
                <div className='flex justify-start items-center my-2' >
                  <a href={val.projectCode} className='h-8 w-24 pt-1.5 text-sm text-center static z-10 bg-purple-700 btn rounded-full' >View Code</a>
                  <a href={val.projectView} className='h-8 w-24 pt-1.5 text-sm text-center static z-10 bg-purple-700 btn ml-2 rounded-full' >View Live</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FrontendWork