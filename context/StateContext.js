
import React, { Context } from 'react'

const Context = createContext()

export const StateContext = ({children}) => {

    

  return (
    <Context.Provider value={{}}>
        {children}
    </Context.Provider>     
  )
}

export default StateContext