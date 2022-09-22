import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    //to store data in firestore
    // useEffect(()=>{
    //     addCollectionandDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(()=>{
        const getCategories = async () => {
        const categoryMap = await getCategoriesAndDocuments()
        setCategoriesMap(categoryMap)
        }
        getCategories()
    }, [])

    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
