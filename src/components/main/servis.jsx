import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaSearch } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiPaint, BiBullseye } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Services = () => {
      const services = [
            { title: "Veb sayt yasash", icon: <FaLaptopCode /> },
            { title: "Mobil dasturlar yasash", icon: <FaMobileAlt /> },
            { title: "Telegram botlar yasash", icon: <FaRobot /> },
            { title: "SEO optimizatsiya", icon: <FaSearch /> },
            { title: "CRM, ERP, HRM, POS tizimlari", icon: <MdOutlineBusinessCenter /> },
            { title: "Dizayn xizmatlari", icon: <BiPaint /> },
            { title: "Digital marketing", icon: <AiOutlineLineChart /> },
            { title: "SMM, Targeting xizmatlari", icon: <BiBullseye /> },
      ];
  

      return (
            <main className="min-h-screen text-white flex flex-col items-center content pb-[130px]">
                  <h2 className="text-3xl font-bold  mb-[10px] p-[30px]">Bizning xizmatlar</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 max-w-6xl mb-[150px]">
                        {services.map((service, index) => (
                              <div
                                    key={index}
                                    className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-30 p-[30px] rounded-lg   w-[278px]  border border-[#01AB78]"
                              >
                                    <div className="text-teal-400 text-5xl mb-4 w-[155px] h-[155px] flex items-center justify-center">
                                          <div className="w-[155px] h-[155px] bg-[#10111F] rounded-full flex items-center justify-center">
                                                {service.icon}
                                          </div>
                                    </div>

                                    <p className="text-lg  font-urbanist text-[23px] font-semibold leading-[31.05px] text-center decoration-skip-ink decoration-from-font">{service.title}</p>
                              </div>
                        ))}
                  </div>
            </main>
      );
};

export default Services;
