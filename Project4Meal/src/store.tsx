import {create} from 'zustand'

interface Meals {
    mealId: string, 
    strMeal: string, 
    strThumbMeal: string
}

interface MealState{
    meals: Meals[];
    searchQuery: string;
    setMeals: (meal: Meals[]) => void;
    setSearchQuery: (query: string) => void;
}

export const useStore = create<MealState>((set) => ({
    meals: [],
    searchQuery: "",
    setMeals: (meals) => set({meals}),
    setSearchQuery: (query) => set({searchQuery: query})
}))

