import { create } from "zustand";

type PasswordStore = {
    
    length: number | '',
    includedSymbols: boolean,
    includedNumbers: boolean,
    includedUpperCase: boolean,
    includedLowerCase: boolean, 
    generatedPassword: string,

    setLength: (length: number | "") => void, 
    toggleSymbols: () => void,
    toggleNumbers : () => void,
    toggleLowerCase: () => void, 
    toggleUpperCase: () => void,
    generatePassword: () => void

}

const passwordGenerator = create<PasswordStore>((set) => ({

    length: "",
    includedSymbols: false, 
    includedNumbers: true,
    includedLowerCase: true, 
    includedUpperCase: true,
    generatedPassword: "",

    setLength: (length) => set({length}),
    toggleNumbers: () => set((state) => ({includedNumbers: !state.includedNumbers})),
    toggleSymbols: () => set((state) => ({includedSymbols: !state.includedSymbols})),
    toggleUpperCase: () => set((state) => ({includedUpperCase: !state.includedUpperCase})),
    toggleLowerCase: () => set((state) => ({includedLowerCase: !state.includedLowerCase})),
    generatePassword: () => {
        set((state) => {
            const numbers = "0123456789";
            const symbols = "!@#$%^&*()_{}?";
            const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowerCase = "abcdefghijklmnopqrstuvwxyz";

            //building pool of characters
            let characters = "";
            if(state.includedNumbers) characters += numbers;
            if(state.includedSymbols) characters += symbols;
            if(state.includedUpperCase) characters += upperCase;
            if(state.includedLowerCase) characters += lowerCase;

            let password = "";
            for(let i = 0; i < state.length; i++){
                password += characters[Math.floor(Math.random() * characters.length)];
            }

            return {generatedPassword: password}

        })
    }



}))

export default passwordGenerator;