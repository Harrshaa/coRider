import React from 'react';

// import { LuSearch, LuEdit} from 'react-icons/lu';
// import { HiDotsHorizontal } from 'react-icons/hi';

import Profile from './Profile';

const Left = ({data}) => {
    return (
    
            <div className='d-flex justify-content-between align-items-center py-3 px-1'>
                
                <div className='d-flex align-items-center'>
                    <div>
                        <img className='profile_photo' src="data:image/jpeg;base64,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" alt="profile_photo" />
                    </div> 
                    <h1 className='px-2 text-light'>Chats</h1>
                </div>
{/* 
                <div className='d-flex'>
                    <div className='mx-2 text-light'><LuEdit /></div>
                    <div className='mx-2 text-light'><HiDotsHorizontal /></div>
                </div>
            

           
            
            <div className='position-relative px-1'>
                <input type="text" className="form-control form-control-sm input_bottom_line" placeholder='Search or start new chat' />
                <span className='text-dark position-absolute top-0 end-0 mx-2 bg-light'> <LuSearch /> </span>
            </div> */}

         
        
                
                
            <Profile item={data} active_backgound={"active_backgound"} text_light={'text-light'}/>
            
            
            </div>
            
        
    );
};

export default Left;