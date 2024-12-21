
import Bar1 from './components/bar1'
import Bar2 from './components/Bar2'
import { GoHome } from "react-icons/go";
import {BsHandbag  } from "react-icons/bs"
import { TbMobiledata } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Middle from './components/middle'


export default function Home() {

  const Bar1Array =[
 {icon:<GoHome/> , title:'Home'},
 {icon:<BsHandbag /> , title:'Assets'},
 {icon:<TbMobiledata />, title:'Live Trade'},
 {icon:<HiOutlineUserGroup />, title:'Forums'},
 {icon:<AiOutlineLineChart/> , title:'Reports'},
 {icon:<IoSettingsOutline /> , title:'Settings'},

  ]

  return (
    <main className=" flex absolute  w-[100%] h-screen ">
        <Bar1 sections={Bar1Array}/>
        <Middle/>
        <Bar2/>
    </main>
  );
}
// handle the pc and chasnge it into responsive  value like rem ,px etc