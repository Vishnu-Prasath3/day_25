 import React,{useContext} from 'react'
 import {userContext} from '../App.jsx'
 import '../App.css'

 export default function Cards() {
  const {state,setstate,customData}=useContext(userContext); 
 
  let jsonData=customData.products.map(a=>a)

    return (
      <>
      <div className='fstdiv'>
      <h1>Done by Vishnu prasath</h1>
      </div>
 {jsonData&&jsonData.map((ele,index)=>(
<div className="card" >
  <img className="card-img-top" src={ele.image}  alt="Card image cap" key={index}></img>
  <div className="card-body">
    <h5 className="card-title" key={index}>{ele.title}</h5>
    <p className="card-text" key={index}>{ele.description}</p>
    <button className='btn btn-primary' onClick={()=>{
      setstate(ele.price+state)
    }}>{"Add To your cart"}</button>
  </div>
</div>

   ))
 }
 
   </>
   )
 }
 