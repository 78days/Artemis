
'use client'
import React, { useState } from 'react'
import { createContext } from 'vm'


const petContext = createContext(null)
const PetContextProvider = ({ data , children}) => {
    const [SelectedPetId,SetSelectedPetId] = useState(null)
    const [Pets , SetPets] = useState(data)

  return (
        <petContext.Provider value={{SelectedPetId,Pets}}>
            {children}
        </petContext.Provider>
  )
}

export default PetContextProvider