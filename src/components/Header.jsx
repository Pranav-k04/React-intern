import React from 'react'
import arrow from "../assets/Vectorarrow.svg";
const Header = () => {
  return (
    <>
    <div className="flex items-center justify-center">
          <h1 className="text-[#2C384A] font-normal text-[38px]">
            Best WebSite builders in the US
          </h1>
        </div>
        <div className="flex justify-between w-4/5 text-sm m-1 mr-[10%] ml-[10%] p-[7px] border-t-2 border-y-[#E1E4E6] border-solid border-b">
          <div className="flex items-baseline justify-start gap-20">
            <p>Last Updated - February 22, 2020</p>
            <p>Advertising Disclosure</p>
          </div>
          <select defaultValue={0} style={{ fontSize: "14px" }}>
            <option value="0">Top Relevant</option>
            <option value="1">Best Choice</option>
            <option value="2">Best Value</option>
          </select>
        </div>
        <div className="flex m-2 gap-24 items-center text-sm">
          <ul>Tools</ul>
          <ul>AWS Builder</ul>
          <ul>Start Build</ul>
          <ul>Build Supplies</ul>
          <ul>Tooling</ul>
          <ul>BlueHosting</ul>
        </div>
        <div className="flex  text-base m-1 gap-3">
          <ul>Home</ul>
          <img alt="arr" src={arrow} />
          <ul>Hosting for all</ul>
          <img alt="arr" src={arrow} />
          <ul>Hosting</ul>
          <img alt="arr" src={arrow} />
          <ul>Hosting6</ul>
          <img alt="arr" src={arrow} />
          <ul>Hosting5</ul>
        </div>
    </>
  )
}

export default Header