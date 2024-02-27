import React from 'react'

const signUp = () => {
  return (
    <>
        <div className="flex  m-3 p-2">
          <div className="">
            <p className="text-[#5C6874] text-3xl max-w-[398px]">
              Sign UP and get exclusive special deals
            </p>
          </div>
          <div className="flex justify-end">
            <input type="text" className="w-96 h-[50px] shadow-md" />
            <button className="bg-[#1B88F4] w-[97px] h-[50px] rounded-r-xl">
              Sign Up
            </button>
          </div>
        </div>
    </>
  )
}

export default signUp