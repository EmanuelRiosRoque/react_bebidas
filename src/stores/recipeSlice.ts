import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter : SearchFilter) => Promise<void>
}


export const createRecipersSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },


    drinks: {
        drinks: []
    },


    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })        
    },

    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })        
    }
})