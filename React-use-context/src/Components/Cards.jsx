 import React,{useContext} from 'react'
 import {userContext} from '../App.jsx'
 import '../App.css'

 export default function Cards() {
  
 const {state,customData}=useContext(userContext);
  let jsonData=customData.products.map(a=>a)

    return (
      <>
      <div className='cards-div'>
  
    {/* images*/}
 {jsonData&&jsonData.map((ele,index)=>(
    <div >
    <img src={ele} key={index}></img>
    </div>
   ))
 }
      
   
   {/*product details ra*/}
   {jsonData&& jsonData.map((a,index)=>(
    <div>
       <div>    
      <h1 key={index} > {a.title} </h1>
      <h6 key={index}>{a.description}</h6>
      </div>
    <p key={index}>{a.category}</p>
    </div>
    ))
   }
     <div className='cards-div3'>
      {"price"}
      {"remove"}
     </div>
   </div>

   <div>
    <h4>subtotal</h4>
    <h4>shipping</h4>
   </div>
   <div>
    <h3>TOTAL:</h3>
    <h4>Rupees</h4>
   </div>
   </>
   )
 }
 