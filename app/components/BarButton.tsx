import React from 'react'





type Props = {}

const BarButton = (props: Props) => {
  return (
    <div className='w-[11pc] rounded-md bg-[#7a51e6] flex  justify-center h-[3pc] my-[7pc] hover:bg-[#5dd85d]  '>
        <button className='flex justify-center items-center gap-2 text-white'>
            <div className='rounded-md border-white border-2  border-solid flex  w-5 h-5 justify-center  text-[white]  items-center '>
            <span className=' relative bottom-[2px] text-sm flex '>¡</span>
            </div>
            <span className='font-extralight'>Guide</span>
   
        </button>
    </div>
  )
}

export default BarButton;