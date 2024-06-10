import { useLayoutEffect, useState } from "react";

export const useLocalStorage = <T extends string>(
    storageKey: string,
    fallbackValue: T
) => {
    const [state, setState] = useState<T>(fallbackValue);

    useLayoutEffect(() => {
        const storedPreferences = localStorage.getItem(storageKey);
        if (storedPreferences) {
            setState(JSON.parse(storedPreferences));
        } else {
            setState(fallbackValue);
            localStorage.setItem(storageKey, JSON.stringify(fallbackValue));
        }
        const listener = (e: StorageEvent) => {
            if (e.key === storageKey && e.newValue) {
                try {
                    setState(JSON.parse(e.newValue || ""));
                } catch {
                    console.error("Error parsing JSON");
                }
            }
        };

        window.addEventListener("storage", listener);
        return () => {
            window.removeEventListener("storage", listener);
        };
    }, [storageKey, fallbackValue]);

    const setNewState: React.Dispatch<React.SetStateAction<T>> = (newState) => {
        setState((o) => {
            let newValue;
            if (typeof newState === "function") {
                newValue = newState(o);
            } else {
                newValue = newState;
            }
            localStorage.setItem(storageKey, JSON.stringify(newValue));
            return newValue;
        });
    };

    return [state, setNewState] as const;
};
