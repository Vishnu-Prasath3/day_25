import React,{useContext} from 'react'
import '../App.css'
import { userContext } from '../App'


function Total() {
    const{state}=useContext(userContext);

  return (<>
    <div className='Total-div'>
     <h1>Total=₹{state}</h1>
    </div>
    </>
  )
}

export default Total