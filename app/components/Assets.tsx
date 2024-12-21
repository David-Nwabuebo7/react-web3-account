import React from 'react'
import { TbMobiledata } from "react-icons/tb";
type Props = {}

const Account = (props: Props) => {
    return (
        <div className='flex flex-col text-xs gap-4'>
                  <div className='p-1 '>              </div>
            <h1 className='text-[#c892de]'>Assets</h1>
            <div  className='flex gap-[7pc]'>
                <span>Bitcoin</span>
                <span>23.5 <span className='text-[#c892de]'>BTC</span> </span>
            </div>
            <div  className='flex gap-[5.2pc]'>
                <span>Ethereum</span>
                <span>190.45 <span className='text-[#c892de]'>ETH</span></span>
            </div>
            <div  className='flex gap-[5.7pc]'>
                <span>Doge</span>
                <span>239,500 <span className='text-[#c892de]'>Doge</span></span>
            </div>
            <div  className='flex gap-[6.5pc]'>
                <span>Ripple</span>
                <span>65,100 <span className='text-[#c892de]'>XRP</span></span>
            </div>
            <span className='text-[#7a51e6]'>More assets...</span>
             
             <button className='w-[11pc] rounded-md bg-[#7a51e6] flex  justify-center items-center gap-2 h-[3pc] hover:bg-[#5dd85d] relative  left-[18px]'>
                    <TbMobiledata className='text-white'/>
                    <h1 className='text-white'>Trade Now </h1>
             </button>
        </div>
    )
}

export default Account