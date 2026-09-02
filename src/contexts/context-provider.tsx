'use client'

import { createContext, useState, type ReactNode } from 'react'
import type { Pet } from '@/lib/types'

type PetContextType = {
  selectedPetId: string | null
  setSelectedPetId: (id: string | null) => void
  pets: Pet[]
  setPets: (pets: Pet[]) => void
}

export const PetContext = createContext<PetContextType | null>(null)

type PetContextProviderProps = {
  data: Pet[]
  children: ReactNode
}

const PetContextProvider = ({ data, children }: PetContextProviderProps) => {
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null)
  const [pets, setPets] = useState<Pet[]>(data)

  return (
    <PetContext.Provider value={{ selectedPetId, setSelectedPetId, pets, setPets }}>
      {children}
    </PetContext.Provider>
  )
}

export default PetContextProvider
