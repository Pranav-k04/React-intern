import React from "react";
import compImg from "../assets/comp.svg";

const Card2 = ({
  tag1,
  tag2,
  heading,
  content,
  discPrize,
  Amount,
  discount,
}) => {
  return (
    <>
      <div className="h-[400px] w-80 p-5 m-3 flex flex-col items-center justify-evenly rounded-xl shadow-md">
        <img className="w-36 h-28 m-1 " src={compImg} alt="comp" />
        <div>
          <div className="flex gap-2">
            <div className="bg-[#F2F4F7] rounded w-max">
              <p className="p-1 text-sm text-[#074786]">{tag1} </p>
            </div>
            <div className=" bg-[#F2F4F7] rounded w-max">
              <p className="p-1 text-sm text-[#074786]">{tag2}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="p-1 text-[#626E79]  text-base">{heading}</p>
            <p className="text-[#626E79] text-base">{content}</p>
          </div>
        </div>
        <div className="flex gap-3 w-80 px-8 justify-start">
          <p className="text-[#5C6874]  text-base">{discPrize}</p>
          <p className="text-[#9FA9B3] text-sm">{Amount}</p>
          <p className="text-[#EF4C5D] text-sm">{discount}</p>
        </div>
        <button
          type="submit"
          className="bg-[#1B88F4] w-64 h-12 rounded-xl text-white"
        >
          View
        </button>
      </div>
    </>
  );
};

export default Card2;
