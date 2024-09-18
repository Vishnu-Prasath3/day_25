import React, { createContext,useState } from 'react' //createContext added
import Cards from './Components/Cards'
import customData from './reactDomTree.json' //getting json from folder

// using context
export const userContext=createContext();
// App function
export default function App() {

  const[state,setstate]=useState("hello,world")
  return (
   <>
    <userContext.Provider value={{state,customData}}>
      <Cards/>
    </userContext.Provider>
   </>
  )
}

