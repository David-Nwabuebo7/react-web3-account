import Image from 'next/image'
import React, { ReactElement } from 'react'
import Guide from './BarButton'
import LogoPicture from './images/logo.png'

interface myObjects {
    icon:ReactElement
    title: string 
}


type Props = {
    sections : myObjects[]
}


const bar1 = (props: Props) => {
    const {sections} = props
  return (
    <div className='flex  flex-col bg-[#e9e4eb] w-[250px] absolute items-center    h-[45pc]  text-[black] ' >
        <div className='flex  gap-7 py-[3pc] cursor-pointer '>
            <Image src={LogoPicture} alt='Logo' className='bg-[#e9e4eb]  rounded-[50%]'/>
            <span>Crypto<strong>Board</strong></span>
        </div>
        <div className='relative  flex flex-col gap-9 cursor-pointer'>
            {
                sections?.map((items:myObjects, index:number)=>{
                    return(
                       <div key={index} className='flex items-center gap-6 hover:text-[#835afd] '>
                        <span className=' relative right-3 flex  '>
                            {items.icon}
                        </span>
                        <span className=''>  {items.title} </span>

                       </div>
                    )
                   
                })
            }
        </div>
                <Guide/>
    </div>
  )
}

export default bar1