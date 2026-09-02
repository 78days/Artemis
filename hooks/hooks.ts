
export function usePetcontext(){
    const context = useContext(PetContext)
    if(!context){
        throw new Error('usePetContext must be used within a PetContextProvider')
    }
    return context
}