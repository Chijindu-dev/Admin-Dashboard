import React, { useState } from 'react'
import './SideBar.css'
import { SideBarData } from '../../Data/Data'
import { UilSignOutAlt, UilBars} from '@iconscout/react-unicons'
import logo from '../../img/logo.svg'
import {motion} from "framer-motion"

const SideBar = () => {


const [selected, setSelected] = useState(0)
const [Expanded , setExpanded] = useState(false)

const sidebarVarients ={
    true:{
        left:'0'
    },
    false:{
        left:"-60%"
    }
}

    return (
        <>
            <div className="Bars" style={Expanded ? {left: "60%"}:{left: "5%"}}
            onClick={()=>setExpanded(!Expanded)}
            >
                <UilBars/>
            </div>
         <motion.div className='Sidebar'
         variants={sidebarVarients}
         animate={window.innerWidth<=786?`${Expanded}`: ""}
         >
            {/* logo */}
            <div className='logo'>
                <img alt='' src={logo}/>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>


            {/* Menu */}
            <div className='menu'>
              {SideBarData.map((items, index)=>(
                 (
                    <div className={selected===index? 'menuItem active': 'menuItem'}
                     key={index}
                    onClick={()=>setSelected(index)}> 
                    <div>
                       <items.icon/>
                    </div>
                    <span>{items.Heading}</span>
                    </div>
                )
              ))}
              
                <div className='menuItem'>
                    <UilSignOutAlt/>
                </div>
            </div>
        </motion.div>

        </>
       

    )
}

export default SideBar
 