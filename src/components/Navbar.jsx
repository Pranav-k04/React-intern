import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="bg-[#212731] flex justify-evenly items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[258px] h-[37px] mx-0 my-2.5 rounded-lg"
        />
        <a className="text-[#D1D6DA] font-normal text-[medium]">Catogiries</a>
        <a className="text-[#D1D6DA] font-normal text-[medium]">
          Website Builders
        </a>
        <a className="text-[#D1D6DA] font-normal text-[medium]">
          Today's Deals
        </a>
      </div>
    </>
  )
}

export default Navbar