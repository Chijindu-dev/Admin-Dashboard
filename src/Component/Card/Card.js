import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'

const Card = (props) => {

    const [Expanded , setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
        {
            Expanded?(
                <expandedCard/>
            ):
            <CompactCard   param={props}/>

        }
    </AnimateSharedLayout>
  )
}




// Compact card
function CompactCard{(params)} {
    return(
        <div className='CompactCard' >
            
        </div>
    )
}


export default Card