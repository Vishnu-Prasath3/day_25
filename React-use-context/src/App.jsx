import React, { createContext,useState } from 'react' //createContext added
import Cards from './Components/Cards'
import customData from './reactDomTree.json' //getting json from folder
import Total from './Components/Total';

// using context
export const userContext=createContext();
// App function
export default function App() {

  const[state,setstate]=useState(0)
  console.log(state);
  
  return (
   <>
    <userContext.Provider value={{state,setstate,customData}}>
      <Cards/>
      <Total></Total>
    </userContext.Provider>
   </>
  )
}


