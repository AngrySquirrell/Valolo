import { createContext } from "react";
import { AppDataModel } from "./types/AppDataModel";

export const appDataDefaultValues: AppDataModel = {
    colorScheme: "dark",
    language: "en-US",
};

export const GlobalContext = createContext<AppDataModel>(appDataDefaultValues);
