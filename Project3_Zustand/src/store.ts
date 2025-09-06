import { create } from "zustand";

type PasswordState = {

    length: number | '';
    includeNumbers : boolean;
    includeSymbols: boolean;
    includeUpperCase: boolean;
    includeLowerCase: boolean;
    generatedPassword : string;
    setLength: (length: number | '') => void;
    toggleNumbers:() => void;
    toggleSymbols: () => void;
    toggleUpperCase: () => void;
    toggleLowerCase: () => void;
    generatePassword: () => void;
    
}

const usePassword = create<PasswordState>((set) => ({

    length: '',
    includeNumbers: true,
    includeSymbols: false,
    includeUpperCase: true,
    includeLowerCase: true,
    generatedPassword: "",

    setLength: (length) => set({length}),
    toggleNumbers: () => set((state) => ({includeNumbers: !state.includeNumbers})),
    toggleSymbols: () => set((state) => ({includeSymbols: !state.includeSymbols})),
    toggleUpperCase: () => set((state) => ({includeUpperCase: !state.includeUpperCase})),
    toggleLowerCase: () => set((state) => ({includeLowerCase: !state.includeLowerCase})),


    generatePassword : () => set((state) => {
        const numbers = "0123456789"
        const symbols = "!@#$%^&*()_{}[]"
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lowerCase = "abcdefghijklmnopqrstuvwxyz"


        let characters = '';

        if(state.includeNumbers) characters += numbers;
        if(state.includeSymbols) characters += symbols;
        if(state.includeUpperCase) characters += upperCase;
        if(state.includeLowerCase) characters += lowerCase;

        let password = '';
        for(let i = 0; i <state.length; i++){
            password += characters[Math.floor(Math.random() * characters.length)]
        }

        return {generatedPassword: password};
    })


}));

export default usePassword;