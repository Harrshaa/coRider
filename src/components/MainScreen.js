import React from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState,useEffect,useRef } from 'react'



const MainScreen = () => {

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData =async ()=>{
    const data =await fetch("https://qa.corider.in/assignment/chat?page=0"); 
    const json=await data.json();
    console.log(json);
   
  };
  




    
  return (
    <div>
      <h1>MainScreen</h1>
      
    </div>



  )
}

export default MainScreen