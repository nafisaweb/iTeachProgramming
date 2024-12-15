import React from 'react'
import { Left, Right, Play } from '../../assets/images'

const Think = () => {
  return (
    <div>
      <div className="think">
            <div className="wrapper ">
                  <div className="think__parent flex items-center justify-between">
                        <div className="think__btn mx-[20px]">
                              <h1 className='text-[#fff] text-[35px] mb-[30px]'>Mijozlar fikri</h1>
                              <button className="btn bg-[#01AB78] px-[40px] py-[20px] rounded-[48px] text-[#fff]">Buyurtma berish</button>
                        </div>
                        <div className="think__info mt-[20px] mx-[20px]">
                              <div className="info__top flex items-center gap-[30px]">
                                    <div className="top__left">
                                          <img className='scrol1' src={Left} alt="" />
                                          <img className='plays' src={Play} alt="" />
                                          <div className="in flex items-center justify-between pt-[250px] text-white text-[18px]">
                                                <p className="intext">Mijozlar izohi</p>
                                                <p className="intext">Davomiyligi: 2 Minut</p>
                                          </div>
                                    </div>
                                    <div className="top__right">
                                          <img className='plays' src={Play} alt="" />
                                          <img className='scrol2' src={Right} alt="" />
                                          <div className="in flex items-center justify-between pt-[250px] text-white text-[18px]">
                                                <p className="intext">Mijozlar izohi</p>
                                                <p className="intext">Davomiyligi: 2 Minut</p>
                                          </div>
                                    </div>
                              </div>
                              <div className="info__bottom  flex items-center justify-between w-[876px] p-[30px] bg-[#111926] border border-[#01AB78] rounded-[30px] mt-[50px]">
                                    <div className="bottom__left flex flex-col items-center ">
                                          <img className='first' src={Left} alt="" />
                                          <img className='second' src={Right} alt="" />
                                          <img className='w-[120px] mb-[20px] h-[120px]' src="./src/assets/brother.png" alt="" />
                                          <p className='text-[#586E92] text-center w-[125px]'>Egamberdiev Mardonbek </p>
                                          <p className='text-[#fff] w-[90px]'>Sayt yasash</p>
                                    </div>
                                    <div className="bottom__right">
                                          <h1 className='text-[#EEFFFC] text-[23px] mb-[12px]'>O’z ish professionallari</h1>
                                          <p className='text-[#92A4C2] w-[625px] leading-[30px] mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged .s, but also the leap into electronic typesetting, remaining essentially unchanged .</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Think