import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia"
import Table from './table'
import { FaBitcoin } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
type Props = {}

const activity = (props: Props) => {
    const transactions = [
        {
          icon:<SiEthereum className='text-[#171616]' />, // Replace with the actual path to your Ethereum icon
          type: '  Ethereum Purchased',
          amount: '0.0154 ETH',
          total: 'USD $10',
          status: 'Pending',
          date: 'February 21, 2021'
        },
        {
          icon:  <FaBitcoin className='text-orange-400' />, // Replace with the actual path to your Bitcoin icon
          type: 'Bitcoin Purchased',
          amount: '0.3 BTC',
          total: 'USD $140',
          status: 'Done',
          date: 'February 14, 2021'
        },
        {
          icon: <FaBitcoin  className='text-orange-400'/>, // Replace with the actual path to your Bitcoin icon
          type: 'Bitcoin Purchased',
          amount: '0.025 BTC',
          total: 'USD $56',
          status: 'Done',
          date: 'January 14, 2021'
        }
      ];

    return (
        <>
           <div className='flex  flex-col absolute top-[18pc]'>
            <div className='flex relative top-[2.8pc]   items-center gap-[36.5pc]'>
                <span className='text-3xl'>ACTIVITY</span>
                <span className='flex gap-3'>
                    <span className='text-xs flex w-[5pc] text-[#7a51e6] items-center'>More Activity </span>
                    <LiaLongArrowAltRightSolid className='text-[#9d41c1]' />
                </span>
            </div>
         
            <Table transactions={transactions} />
      
        </div>
    
        </>
     
    )
}

export default activity