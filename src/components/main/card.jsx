import React from "react";

const card = () => {
  const cards = [
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
    { title: "Eshonov Fakhriyor", description: "UX/UI Dizayner" },
  ];
  return (
    <div className="min-h-screen text-white flex flex-col items-center content mb-[100px]">
      <h2 className="text-3xl font-bold mb-10 p-[30px]">Kardlarimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 max-w-6xl mb-[100px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-30 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 w-[278px] h-[287px] border border-[#01AB78]"
          >
            <div className="text-teal-400 text-5xl mb-4 w-[155px] h-[155px] flex items-center justify-center">
              <div className="w-[155px] h-[155px] bg-[#10111F] rounded-full flex items-center justify-center">
                <img src="/src/assets/person.png" alt="" />
              </div>
            </div>

            <p className="text-center text-lg  font-urbanist text-[20px] font-semibold leading-[27px]  decoration-skip-ink decoration-from-font">
              {card.title}
            </p>
            <p className="text-[#637FAD] text-center text-sm font-small font-urbanist text-[16px] font-normal leading-[21.6px]  decoration-skip-ink decoration-from-font">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default card;
