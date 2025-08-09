import { useState, type ReactNode } from "react"
import type { MaybeCategory } from "../types"
import { SelectedCategoryContext } from "../contexts/context"

const SelectedCatgoryProvider = ({children}:{children:ReactNode}) => {
    const [selectedCategory, setSelectedCategory] = useState<MaybeCategory>("")
    

    return(
        <SelectedCategoryContext.Provider value={{selectedCategory,setSelectedCategory}}>
            {children}
        </SelectedCategoryContext.Provider>
    )
}

export default SelectedCatgoryProvider