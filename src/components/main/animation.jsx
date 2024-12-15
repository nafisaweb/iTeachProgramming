import React from "react";

const Animation = () => {
  return (
    <div>
      <div className="absolute top-80 left-20 w-28 h-28 bg-[#111E24] rounded-full animate-float"></div>
      <div className="absolute top-[70%] right-[50%] w-40 h-40 bg-[#111E24] rounded-full  animate-floatReverse"></div>
      <div className="absolute bottom-80 left-[50%] w-20 h-20 bg-[#111E24] rounded-full  animate-floatReverse"></div>
      <div className="absolute bottom-20 left-40 w-40 h-40 bg-[#111E24] rounded-full  animate-float"></div>
      <div className="absolute top-[30%] right-[10%] w-20 h-20 bg-[#111E24] rounded-full  animate-floatReverse"></div>
      <div className="absolute bottom-10 right-40 w-64 h-64 bg-[#111E24] rounded-full animate-float"></div>
      <div className="absolute bottom-[20%] left-[63%] w-40 h-40 bg-[#20DDA4] rounded-full shadow-2xl shadow-[#20DDA4]/80 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-[30%] left-[-6%] w-40 h-40 bg-[#20DDA4] rounded-full shadow-2xl shadow-[#20DDA4]/80 opacity-50 blur-3xl"></div>
      <div className="absolute top-[10%] left-[40%] w-40 h-40 bg-[#20DDA4] rounded-full shadow-2xl shadow-[#20DDA4]/80 opacity-50 blur-3xl"></div>


    </div>
  );
};

export default Animation;
