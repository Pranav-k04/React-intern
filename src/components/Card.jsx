import React from "react";
import compImg from "../assets/comp.svg";
const Card = ({
  tag,
  num,
  heading1,
  content1,
  content2,
  offer,
  ratingvalue,
  rating,
  stars,
  extraContent,
}) => {


  return (
    <>
      <div className="relative">
        {tag && (
          <div className="tag absolute text-center bg-[#FF7724] text-white text-base w-32 h-8 rounded-r-lg">
            {tag}
          </div>
        )}
        <div className="absolute text-[#626E79] top-12 text-xl">{num}</div>

        <div className="flex" id="1">
          <div className="img w-[40%] flex items-center">
            <img src={compImg} alt="comp" />
          </div>
          <div className="content border-spacing-5 m-7 p-4">
            <p className="con1 text-base m-1 p-5 text-[#4B5665]">
              <strong className="text-[#4B5665]">{heading1}</strong>
              {content1}
            </p>
            {offer && (
              <div className="bg-[#F2F4F7] rounded w-max">
                <p className="text-[#074786]">{offer}</p>
              </div>
            )}
            <strong className="font-semibold text-[#2C384A]">
              Main Highlights
            </strong>
            <p className="con2 m-1 p-3 text-base text-[#4B5665]">{content2}</p>
            
            { extraContent && (
            <div className="bg-[#FFF4ED] rounded-xl p-3 flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="bg-white w-fit p-1 rounded text-[#1B88F4]">
                  9.9
                </div>
                <ul className="text-[#4B5665] text-base">
                  Building Responsive
                </ul>
              </div>
              <div className="flex flex-row gap-2">
                <div className="bg-white w-fit rounded p-1 text-[#1B88F4]">
                  9.9
                </div>
                <ul className="text-[#4B5665] text-base">Cool</ul>
              </div>
              <div className="flex flex-row gap-2">
                <div className="bg-white w-fit p-1 rounded text-[#1B88F4]">
                  9.9
                </div>
                <ul className="text-[#4B5665] text-base">Docs</ul>
              </div>
            </div>
            )}
            <a href="" className="text-[#1B88F4]">
              Show More
            </a>
          </div>
          <div className="ratingcard flex flex-col items-center justify-evenly w-1/4">
            <div className="rating bg-[#F3F9FF] w-32 h-32 flex flex-col items-center rounded-b-xl justify-evenly">
              <p className="text-4xl text-[#074786]">{ratingvalue}</p>
              <p className="text-sm text-[#074786] font-normal">{rating}</p>
              <img alt="arr" src={stars} />
            </div>
            <button
              type="submit"
              className="bg-[#1B88F4] w-60 h-12 rounded-xl text-white"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
