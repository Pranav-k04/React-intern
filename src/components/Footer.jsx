import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="bg-[#212731]  text-white flex justify-around p-12">
          <div className="flex flex-col p-2">
          <ul className="text-base">CATEGORIES</ul>
          <ul className="text-sm p-2">Web Builder</ul>
          <ul className="text-sm p-2">Hosting</ul>
          <ul className="text-sm p-2">Data Center</ul>
          <ul className="text-sm p-2">Robotic-Automation</ul>
          </div>
          <div className="flex flex-col">
          <ul className="text-base">CONTACT</ul>
          <ul className="text-sm p-2">contact</ul>
          <ul className="text-sm p-2">Privacy Policy</ul>
          <ul className="text-sm p-2">Terms of Service</ul>
          <ul className="text-sm p-2">catogiries</ul>
          <ul className="text-sm p-2">About</ul>
          </div>
          <div className="flex flex-col">
          <p>United States</p>
          </div>
        </div>
    </>
  )
}

export default Footer