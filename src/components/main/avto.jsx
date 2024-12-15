import React from 'react'

const avto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Avto = () => {
  return (
  <div className='min-h-screen text-white flex flex-col items-center content'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 max-w-6xl mt-[50px]">
        {avto.map((index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center "
          >
            <div className=" w-[278px] h-[186px] flex items-center justify-center">
              <img className=" w-[278px] h-[186px]" src="./src/assets/avto.png" alt="" />
            </div>  
          </div>
        ))}
      </div>
  </div>
  )
}

export default Avto