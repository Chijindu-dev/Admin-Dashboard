import React, { useState } from 'react'
import './SideBar.css'
import { SideBarData } from '../../Data/Data'
import { UilSignOutAlt} from '@iconscout/react-unicons'
import logo from '../../img/logo.svg'


const SideBar = () => {


const [selected, setSelected] = useState(0)




    return (
        <div className='Sidebar'>
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
        </div>


    )
}

export default SideBar
 