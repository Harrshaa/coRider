import React from 'react';
import Profile from './Profile';

// import { LuSearch, LuEdit} from 'react-icons/lu';
// import { HiDotsHorizontal } from 'react-icons/hi';



const Left = ({data}) => {
    return (
    
            <div className='d-flex justify-content-between align-items-center py-3 px-1'>
                
                <div className='d-flex align-items-center'>
                
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

         
        
                
                
            {/* <Profile item={data} active_backgound={"active_backgound"} text_light={'text-light'}/> */}
            
            
            </div>
            
        
    );
};

export default Left;