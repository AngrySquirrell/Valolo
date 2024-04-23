import { createContext } from "react";
import { languages } from "./types/LanguageType";


export type contextModel = {
    colorScheme: 'light' | 'dark',
    language: languages
}

export const initialValuesContext: Partial<contextModel> = {
    colorScheme: 'dark',
    language: "en-US",
}

export const GlobalContext = createContext<Partial<contextModel>>(initialValuesContext)


