import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { SiPixlr } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
const Footer = () => {
  return (
    <section>
      <div className="border py-20 bg-[#04245D] text-white  ">
        <div className="container mx-auto flex justify-between">
        {/* one */}
        <div className="">
          <img src="/home/footer/logo-ff.png" alt="logo" />
          <small className='mt-4'>We will likely assistance organizations <br />
            keep up accomplish best class positions <br />
            their separate enterprises & our group <br />
            works happen that delights need to be <br />
            disavowed.</small>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.facebook.com/business/ai">
              <p className='border w-[40px] h-[40px] rounded-full flex  justify-center items-center text-2xl  '><TiSocialFacebook /></p>
              </a>

              <a href="https://pixlr.com/ai/">
              <p className='border w-[40px] h-[40px] rounded-full flex  justify-center items-center text-2xl  '><SiPixlr /></p>
              </a>

              <a href="https://slashdot.org/software/ai-tools/for-x/">
              <p className='border w-[40px] h-[40px] rounded-full flex  justify-center items-center text-2xl  '><IoLogoTwitter /></p>
              </a>
              <a href="https://www.google.com/aclk?sa=L&ai=DChsSEwi3pIbtrI-SAxWIGYMDHe76ElgYACICCAEQABoCc2Y&co=1&ase=2&gclid=CjwKCAiAvaLLBhBFEiwAYCNTf4zmq9gSyzTqqKOp7c__YoMkpUFJg-QjHbrmRfV6XbMHmUrR7C9NPRoCsA4QAvD_BwE&cid=CAASuwHkaI8Qrigtv034JQlTSemtW3HBWFnnaN1ab71Stq9fjwdZc_MEMPLn3L9fUfqPdHIiGoVHuQ83ec0cVHNKGEFUiRwB84UrxbjvPCrND8sMTXw7-QTqRfT0s448seZyuMl_RkpFLeRRJdNPp5UIxFJ68jZ8vu1w-kuxjMBwC2ap_HonP2ytA_Db3V5xo8lDfqw1T0npVsnWoS65MwQUG2VkmEN2z260LJ5WzsT7FrZnUWpmE3dO-bihC2K0&cce=2&category=acrcp_v1_32&sig=AOD64_1crL2FSh9IQVIl7SYpBCS9rKoasw&q&nis=4&adurl&ved=2ahUKEwiCzv7srI-SAxXHwjgGHf02BbcQ0Qx6BAgYEAE">
              <p className='border w-[40px] h-[40px] rounded-full flex  justify-center items-center text-2xl  '><TbWorld /></p>
              </a>
            </div>
        </div>

        {/* two */}
        <div className=" w-[22%] ">
          <h3  className='font-bold text-2xl '>Latest Work</h3>
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            <img src="/home/footer/list2 (1).png" alt="version_logo_ai" />
            <img src="/home/footer/list2 (2).png" alt="version_logo_ai" />
            <img src="/home/footer/list2 (3).png" alt="version_logo_ai" />
            <img src="/home/footer/list2 (4).png" alt="version_logo_ai" />
            <img src="/home/footer/list2 (5).png" alt="version_logo_ai" />
            <img src="/home/footer/list2 (6).png" alt="version_logo_ai" />

          </div>
        </div>

        {/* three */}
        <div className="">
          <h3  className='font-bold text-2xl '>Useful Links</h3>
          <p className='mt-4 flex items-center gap-1 '><span className=' text-blue-500 pr-2'><GoDotFill /></span> Advertising & Marketing</p>
          <p className='mt-4 flex items-center gap-1 '><span className=' text-blue-500 pr-2'><GoDotFill /></span> Healthcare & Medicine</p>
          <p className='mt-4 flex items-center gap-1 '><span className=' text-blue-500 pr-2'><GoDotFill /></span> Financials & Banking</p>
          <p className='mt-4 flex items-center gap-1 '><span className=' text-blue-500 pr-2'><GoDotFill /></span> Data Warehousing</p>
          <p className='mt-4 flex items-center gap-1 '><span className=' text-blue-500 pr-2'><GoDotFill /></span> Travel & Hospitality</p>
          <p className='mt-4 flex items-center gap-1 '><span className=' text-blue-500 pr-2'><GoDotFill /></span> Media & Entertainment</p>
        </div>

        {/* four */}
        <div className="">
          <h3 className='font-bold text-2xl '>Contact Us</h3>
          <h4 className='text-blue-500 mt-4'>Office Location</h4>
          <p>124, Queens walk 2nd cross Denmark</p>
          <h4 className='text-blue-500'>Phone No:</h4>
          <p>+00-888-27-240</p>
          <h4 className='text-blue-500'>Email Address</h4>
          <p>support@info.com</p>

        </div>

        </div>

      </div>
    </section>
  )
}

export default Footer
