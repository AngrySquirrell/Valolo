import { languages } from "./LanguageType";

export type AppDataModel = Partial<{
    colorScheme: "light" | "dark";
    language: languages;
}>;
