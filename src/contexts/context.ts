import { createContext, useContext } from 'react'
import type { CategoryContextProps, SelectedCategoryContextProps } from '../types'

//   **************************** CATEGORY LIST CONTEXT ****************************

export const CategoryContext = createContext<CategoryContextProps | undefined>(undefined)

export const useCategory = () => {
    const context = useContext(CategoryContext)
    if(!context){
        throw new Error('useCategory must be used within a CategoryProvider')
    }
    return context
}


//   **************************** SELECTED CATEGORY CONTEXT ****************************

export const SelectedCategoryContext = createContext<SelectedCategoryContextProps | undefined>(undefined)

export const useSelectedCategory = () => {
    const context = useContext(SelectedCategoryContext)
    if(!context){
        throw new Error("useSelectedCategory must be used SelectedCategoryProvider")
    }
    return context
}