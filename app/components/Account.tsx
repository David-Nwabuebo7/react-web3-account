import React from 'react'

type Props = {}

const Account = (props: Props) => {
  return (
    <div className='flex flex-col justify-end text-xs gap-4'>
  
        <h1 className='text-[#c892de] relative right-1'>Account</h1>
        <div className='flex gap-[4.6pc]'>
            <h1 className='relative right-1'>Joined</h1>
            <h1 className='text-[#c892de]'>June 22, 2020</h1>
        </div>
        <div className='flex gap-[4pc]'>
            <h1 className='relative right-1'>Assets Total</h1>
            <h1>$1,312,900</h1>
        </div>
    </div>
  )
}

export default Account