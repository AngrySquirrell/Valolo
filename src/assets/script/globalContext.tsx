import { createContext } from "react";

type languages = "ar-AE" | "de-DE" | "en-US" | "es-ES" | "es-MX" | "fr-FR" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "ru-RU" | "th-TH" | "tr-TR" | "vi-VN" | "zh-CN" | "zh-TW";

export type contextModel = {
    colorScheme: 'light' | 'dark',
    language: languages
}

export const initialValuesContext: Partial<contextModel> = {
    colorScheme: 'dark',
    language: "en-US",
}

export const GlobalContext = createContext<Partial<contextModel>>(initialValuesContext)


