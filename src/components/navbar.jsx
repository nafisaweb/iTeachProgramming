import React from 'react'
import { Logo, Menu, Globus, Kal, Tel } from '../assets/images'

const navbar = () => {
  return (
     <nav className='bg-[#111926] p-2 sticky top-0 z-50'>
      
      <div className="wrapper">
            <div className="nav-parent flex items-center justify-between">
                  <div className="logo flex items-center gap-4">
                        <img src={Logo} alt="logo" />
                        <h1 className="text-[#20DDA4] ">iTeachProgramming</h1>
                        <img src={Menu} alt="" />
                  </div>
                  <div className="menu px-6 py-1 bg-[#20DDA4] rounded-[20px] ml-[300px]">
                        <button className='flex items-center gap-4'>
                              <img src={Kal} alt="" />
                              <h1 className='text-white text-[18px]'>Kalkulyator</h1>
                        </button>
                  </div>
                  <div className="tel flex items-center gap-4">
                        <img src={Tel} alt="" />
                        <h1 className='text-white text-[18px]'>+9998976282882</h1>
                  </div>
                  <div className="lang flex items-center gap-3 border-2 border-[#20DDA4] px-2 py-1 rounded-[10px]">
                        <img src={Globus} alt="" />
                        <select name="lang" id="" className='bg-transparent text-[#20DDA4] text-[18px]'>
                              <option value="ru">RU</option>
                              <option value="uz">UZ</option>
                              <option value="en">EN</option>
                        </select>
                  </div>
            </div>
      </div>
     </nav>
      )
}

export default navbar