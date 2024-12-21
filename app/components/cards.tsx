
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface myObjects {
    Name: string
    Amount: string
    Graph: StaticImageData
}
type Props = {
    items: myObjects[]

}

const cards = (props: Props) => {
    const { items } = props
    return (
        <div className='flex justify-evenly absolute  gap-5 top-[7pc]'>
            {
                items?.map((elements, index) => {
                    return (
                        <div key={index} className='flex  flex-col text-[#7a51e6]'>
                            <h1 className=''> {elements.Name} </h1>
                            <div className='flex justify-around'>
                            <div className='Cards  rounded-[12px] hover:text-white text-[#7a51e6]  border-[1px] border-[#7a51e6] p-[20px] flex flex-col hover:bg-[#7a51e6] w-[16pc]  focus:text-white bg-slate-50 '>
                                <div className='hover:text-[white] '>
                                    <p className='mr-2'>
                                        $
                                    </p>
                                    <div className='flex justify-between'>
                                        <h1 className=' hover:text-white text-3xl'> {elements.Amount} </h1>
                                        <Image src={elements.Graph} alt='Graphs' width={70} className='rounded-xl' />
                                    </div>
                                </div>

                                <div className='flex justify-between text-[13px] pt-5 hover:text-[white] '>
                                    <div className=' flex flex-col  hover:text-[white] '>
                                        <h3 className=''>Profit</h3>
                                        <p className='text-[#5dd85d]'>+ 2.87%</p>

                                    </div>
                                    <div className=' hover:text-[white] '>
                                        <h3 className=' hover hover:text-[white] '>Loss</h3>
                                        <p className='text-[#e18787]'>- 2.87%</p>
                                    </div>
                                    <div className=' hover:text-[white] '>
                                        <h3 className=' hover:text-[white] '>Neutral</h3>
                                        <p className='text-[#5dd85d]'>+ 2.87%</p>

                                    </div>
                                </div>

                            </div>
                            </div>
                          


                        </div>

                    )
                })

            }
            <div className='Cards2  rounded-[12px] hover:text-white   border-[1px]  p-[30px] flex flex-col w-[16pc] h-[177.5px] focus:text-white bg-slate-100 relative top-6  justify-center  items-center  text-[#7a51e6]  '>
                <div className='  flex flex-col justify-center items-center '>
                <span className='flex border-[1.99px] rounded-[8px] justify-center items-center w-8  text-xl Plus cursor-pointer hover:border-white '>
                        +
                    </span>
                    <div className=' flex top-3 relative justify-center'>
                        New Asset
                    </div>
                </div>
                  
            </div>
        </div>
    )
}

export default cards