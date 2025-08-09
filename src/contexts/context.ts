import { createContext, useContext } from 'react'
import type { CategoryContextProps } from '../types'


export const CategoryContext = createContext<CategoryContextProps | undefined>(undefined)

export const useCategory = () => {
    const context = useContext(CategoryContext)
    if(!context){
        throw new Error('useCategory must be used within a CategoryProvider')
    }
    return context
}