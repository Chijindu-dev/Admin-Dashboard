import React, { useState } from 'react'
// import { AnimateSharedLayout } from 'framer-motion'
import { layoutId } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'

const Card = (props) => {

    const [Expanded , setExpanded] = useState(false)

  return (
    <layoutId>
        {
            Expanded?(
                'Expanded'
            ):
            <CompactCard   param={props}/>

        }
    </layoutId>
  )
}




// Compact card
function CompactCard ({param}) {
    const Png = param.png;
    return(
        <div className='CompactCard'
            style={{
                background : param.color.background,
                boxShadow:param.color.boxShadow
            }}
        >
            <div className='radialBar'>
                    <CircularProgressbar value={param.barValue}
                    text={`${param.barValue}%`}>

                    </CircularProgressbar>
            </div>
            <div className='details'>
                <Png/>
                <span>${param.value}</span>
                <span>last 24 hours</span>
            </div>
        </div>
    )
}


export default Card