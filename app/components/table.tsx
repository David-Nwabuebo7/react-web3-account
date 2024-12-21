import React, { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Table } from 'react-bootstrap'

interface MyObjects{
    icon: ReactNode
    type: string 
    amount:string 
    total: string 
    status: string 
    date:string 
}
type Props = {
    transactions :MyObjects[]
}
 
const table = (props: Props) => {
     const {transactions} = props
  
  return (
    <div className=' relative  flex-col flex justify-center items-center bg-[#7a51e6] px-6 top-[70px] text-white rounded-md transactions-table '>
                <Table striped bordered hover className="flex  w-full justify-center items-center text-xs ">
                    <thead className='w-full'> 
                        <tr className='cursor-pointer '>
                            <th  className='text-left flex'>Transactions</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            transactions?.map((items,index)=>{
                                return(
                                  
                                    <tr key={index} className='text-left'>
                                        <td className='flex items-center  gap-4'>
                                           <div className=' bg-white flex w-7 h-7 rounded-md justify-center items-center'>
                                            <span className='flex text-[17px]'>
                                            {items.icon}
                                            </span>
                                           
                                           </div>
                                           <span>
                                           {items.type}
                                           </span>
                                        </td>
                                    <td className=''>{items.amount}</td>
                                    <td>{items.total}</td>
                                    <td className='' style={{color:items.status ==='Pending'?'white':'#5dd85d'}} >{items.status}</td>
                                    <td>{items.date}</td>
                                    </tr>
                                )
                            })
                        }
      </tbody>
           
                </Table>
    </div>
  )
}

export default table