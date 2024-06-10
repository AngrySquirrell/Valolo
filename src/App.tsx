import "@mantine/charts/styles.css";
import "./App.css";
import {
    AppShell,
    MantineProvider,
    useComputedColorScheme,
    useMantineColorScheme,
} from "@mantine/core";
import theme from "./script/theme";
import Router from "./router/router";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalContext } from "./script/globalContext";
import "@mantine/core/styles.css";
import { useValorantAPI } from "./script/hooks/useValorantAPI";
import { useEffect } from "react";
import { useLocalStorage } from "./script/hooks/useLocalStorage";
import { AppDataModel } from "./script/types/AppDataModel";
import { languages } from "./script/types/LanguageType";

function App() {
    const [localLanguage, setLocalLanguage] = useLocalStorage<languages>(
        "language",
        "en-US"
    );
    const [localColorScheme, _setLocalColorScheme] = useLocalStorage<
        "light" | "dark"
    >("colorScheme", "dark");
    const { setColorScheme } = useMantineColorScheme();
    const defaultContext: Partial<AppDataModel> = {
        colorScheme: localColorScheme,
        language: localLanguage,
    };

    useEffect(() => {
        console.log("context", defaultContext);
        console.log("localStorage", { localColorScheme, localLanguage });
    }, [defaultContext, localColorScheme, localLanguage]);

    return (
        <GlobalContext.Provider value={defaultContext}>
            <Router>
                <AppShell navbar={{ width: 192, breakpoint: "100vw" }}>
                    <AppShell.Navbar>
                        <Navbar />
                    </AppShell.Navbar>
                    <AppShell.Main>
                        <Outlet />
                    </AppShell.Main>
                </AppShell>
            </Router>
        </GlobalContext.Provider>
    );
}

export default App;
