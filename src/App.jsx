import {MultiStepForm} from "./MultiStepForm"
import LangContext from "./LangContext"
import { useState } from "react"
import LangueComponant from "./LangueComponant"
function App(){
  const [languege,setLangueg]=useState('Hello')
  const switchLang=()=>{
    setLangueg((prev)=>(prev === 'Hello' ? 'Haa' :'Hello'))
  }
  return(
    <div>
      <LangContext.Provider value={languege}>
        <button onClick={switchLang}>
          switch to {languege === 'Hello' ? 'Somali' : 'English' }
        </button>
        <LangueComponant/>

      </LangContext.Provider>
     <MultiStepForm/>
    </div>
  )
}
export default App