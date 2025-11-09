import React, { useContext } from 'react'
import LangContext from './LangContext'

export default function () {
    const languege=useContext(LangContext)
   

  return (
    <div>
        <h1>{languege}</h1>
    </div>
  )
}
