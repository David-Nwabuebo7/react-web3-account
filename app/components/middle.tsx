import React from 'react'
import Cards from './cards'
import { LiaLongArrowAltRightSolid } from "react-icons/lia"
import Graph1 from './images/graph1.png'
import Graph2 from './images/graph2.png'
import  Activity from './activity'


const middle = () => {

  const Values = [
    {Name:'Bitcoin',Amount:'1,820', Graph: Graph1},
    {Name:'Ethereum',Amount:'1,100' , Graph: Graph2}
  ]
  return (
    <div className='flex flex-col absolute mt-[3.3pc] left-[17pc] justify-evenly'>
        <div className='flex text-xs text-slate-400'>{'Dashboard > Home'}</div>
        <div className='flex relative top-[2.8pc]  items-center gap-[38pc]'>
            <span className='text-3xl'>ASSETS</span>

            <span className='flex gap-3'>
            <span className='text-xs flex w-[5pc]  items-center  text-[#7a51e6]'>More Assets </span>
            <LiaLongArrowAltRightSolid className='text-[#9d41c1]' />
            </span>
            
        </div>
        <div>
        <Cards items={Values} />
        </div>
    `    <div>
          <Activity/>
          </div>
          

    </div>
  )
}

export default middle ;