import React from 'react'
import Image from 'next/image'
import profilePicture from './images/ProfilePic.png'
import Account from './Account'
import Assets from './Assets'

type Props = {}

const Bar2 = (props: Props) => {
  return (
    <div className='flex  flex-col bg-[#e9e4eb] w-[250px] absolute items-center left-[70pc]  h-[50pc]  text-[black]'>
        <div className='flex py-[3pc] font-bold'>
          Trader Profile
        </div>
        <div className='flex items-center flex-col gap-3 bottom-7 relative '>
          <Image alt='profile picture' src={profilePicture} className='rounded-[50%]' width={80}/>
          <h1 className='text-sm'>Han Ji Pyeong</h1>
          <span className='text-[#835afd] text-sm'>Edit Profile</span>
        </div>
        <Account/>
        <Assets/>
    </div>
  )
}

export default Bar2





