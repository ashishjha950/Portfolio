import React, { useState } from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import { toast } from 'react-toastify'
import { BiCircle, BiCross } from 'react-icons/bi'

function Contact() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [submited, setSubmited] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !userMessage) {
      toast.warn("All fields are required!", { theme: "dark", style: { fontSize: "14px", width: '250px' } });
      return;
    }
    setSubmited(true);

    const userData = {
      access_key: "ead47d86-18b3-4120-9280-24a3f4a51e1e",
      name: userName,
      email: userEmail,
      message: userMessage
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userData)
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully", { theme: "dark", style: { fontSize: "14px", width: '250px' } });
    } else {
      toast.error("Server Error", { theme: "dark" });
    }
    setUserName("");
    setUserEmail("");
    setUserMessage("");
    setSubmited(false);
  };

  return (
    <div id='contact' className=' relative'>
      <div id='contact' className='h-full w-full m-auto text-center'>
        <h1 className='text-3xl md:text-5xl font-semibold py-7'>Get in touch</h1>
      </div>

      <BiCircle className='text-5xl animate-pulse absolute bottom-1 left-0 sm:bottom-24 sm:left-10' />
      <BiCircle className='text-4xl animate-pulse absolute bottom-0 left-6 sm:bottom-20 sm:left-14' />
      <BiCross className='text-xl animate-spin absolute right-10' />
      <BiCross className='text-4xl animate-spin absolute right-10 bottom-2' />

      <div className='flex flex-col sm:flex-row justify-between md:px-10 '>
        {/* left side */}
        <div className='h-full w-full sm:w-3/5 lg:w-1/2 sm:pt-8 text-center sm:text-start '>
          <h1 className='text-xl md:text-4xl font-semibold invisible sm:visible' >Let's talk</h1>
          <p className='w-full sm:w-11/12 lg:w-3/4 pb-10 sm:py-4 text-sm' > <span className='font-bold text-lg' >Hyy there!</span><br /> Thank you so much for visiting my portfolio and taking the time to explore my projects. If you have any thoughts or feedback, I’d love to hear them! Your suggestions would be incredibly helpful and mean a lot to me as I continue to improve. <br /> Feel free to drop me a message anytime! <br /> <span className='text-lg sm:text-xl font-bold'>Thanks for visiting!😊</span></p>
          <div className='flex justify-start mb-4 sm:my-4 ' >
            <img src={mail_icon} alt="" className='h-3 w-10 mt-1 cursor-pointer ' />
            <p className='sm:px-2 text-sm cursor-pointer '>ashishjha97099@gmail.com  </p>
          </div>
          <div className='flex justify-start my-2 sm:my-4 ' >
            <img src={call_icon} alt="" className='h-4 w-10 mt-1 cursor-pointer ' />
            <p className='sm:px-2 text-sm  cursor-pointer'>+91-9508272452  </p>
          </div>
          <div className='flex justify-start sm:my-4 ' >
            <img src={location_icon} alt="" className='h-4 w-10 mt-1 cursor-pointer ' />
            <p className='sm:px-2 text-sm  cursor-pointer'>SVIET Campus, Rajpura Punjab  </p>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={onSubmit} className='h-full w-full sm:w-2/5 lg:w-1/2 mt-10 sm:mt-0 '>
          <div className='flex flex-col'>
            <label htmlFor='' className='sm:py-4 text-base' >Your Name</label>
            <input name='name' type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your name' className='h-10 w-full lg:w-4/5 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded' />
          </div>
          <div className='flex flex-col' >
            <label htmlFor='' className='pt-4 text-base sm:pb-2'>Your Email</label>
            <input name='email' type='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder='Enter you email' className='h-10 w-full lg:w-4/5 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded' />
          </div>
          <div className='flex flex-col' >
            <label htmlFor='' className='pt-4 text-base sm:pb-2'>Write Your message here</label>
            <textarea name='message' type="text" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} placeholder='Enter your Message' className='h-48 md:h-52 w-full lg:w-4/5 pt-4 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded overflow-hidden' />
          </div>
          <div className='my-4 sm:my-8 ' >
            <button type="submit" disabled={submited ? true : false} className={`h-10 w-36 ${submited ? '' : 'btn'} bg-purple-700 rounded-md font-semibold mb-10 text-base`} >Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact