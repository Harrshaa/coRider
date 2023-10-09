import React from 'react'

import iphoneBattery from'../utils/iphoneBattery.svg'
import iphoneTime from'../utils/iphoneTime.svg'



const Left = ({ active_backgound, text_light}) => {
  return (
    <div className='float-right justify-content-end align-items-end ml-auto row h-100 position-relative'>
      <span className='mx-2'><img src={iphoneTime} alt="iphoneTime" /></span>
      <span className='mx-2 p-0 d-flex justify-content-end '><img src={iphoneBattery} alt="iphoneBattery" /></span>
                            
                         
    </div>    
    

  );
}

export default Left