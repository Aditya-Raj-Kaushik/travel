import React from 'react';
import { Link } from 'react-router-dom';

const Lines = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-bold text-[60px] text-center mt-12'>PlanMyYatra: Safar aapka, raasta humara!</h1>
      <h1
      className='font-bold text-[40px] text-center'
      ><span className='text-[#f56551]'>  Discover Your Next Adventure with AI: </span><br />
       <span className='text-gray-700'> Personalized Itinaries at Your Fingertips</span></h1>
       <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget.</p>
       <Link to={'/create-trip'}>
       <button className="px-4 py-2 rounded-lg border-2 border-black bg-black text-white">Get Started, It's Free</button>
       </Link>
    </div>
  )
}

export default Lines
