import React from 'react'
import { Banner, Bg } from '../../assets/images'
import { Link } from 'react-router-dom'
const banner = () => {
  return (
      <main >
       
    <div className="wrapper">
    <div  className="relative">
      {/* Asosiy kontent */}
      <div className="relative z-10 flex items-center gap-10 px-10">
        <div className="max-w-lg ml-[100px]">
          <h1 className="text-[44px] w-[484px] font-bold leading-snug  text-[#fff] mt-[180px]">
            O'z kelajagingizni ITeach bilan birga quring!
          </h1>
          <button className="mt-6 px-6 py-3 bg-[#01AB78] text-lg font-medium rounded-[30px] shadow-lg hover:bg-green-400 transition">
            Xizmatlar
          </button>
        </div>
        <div className="w-[430px] h-[430px] ml-[150px] bg-[#111926] border-2 mt-[87px] border-[#20DDA4] rounded-full flex items-center justify-center">
          <img src={Banner} alt="Banner" className="w-[330px] h-[330px]" />
        </div>
      </div>

      
    </div>
    </div>
     
      </main>
  )
}

export default banner