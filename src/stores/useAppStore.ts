import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

import { createRecipersSlice, RecipeSliceType } from './recipeSlice'

export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({
    ...createRecipersSlice(...a)
})))