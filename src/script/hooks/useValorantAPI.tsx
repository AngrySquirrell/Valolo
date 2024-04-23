import { useContext, useEffect, useState } from "react";
import { ErrorModel } from "../types/ErrorModel";
import { GlobalContext } from "../globalContext";
import { EndpointModel } from "../types/Endpoints";

const url = "https://valorant-api.com/v1";
export const useValorantAPI = <T extends object>(endpoint: EndpointModel) => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorModel>();
    const globalContext = useContext(GlobalContext);

    const parseURI = () => {
        let urlvars = endpoint.params ? `/${endpoint.params.uuid}` : "";
        let params = `?${globalContext.language ? `language=${globalContext.language}` : ""
            }&isPlayableCharacter=true`;
        return `${url}/${endpoint.root}${urlvars}${params}`;
    };

    const fetchData = async () => {
        setLoading(true);
        let target = parseURI();
        try {
            const response = await fetch(target);
            const result = await response.json();
            setData(result);
            console.log("testestetse", result);
        } catch (error) {
            console.log("ERREUR", error);
            setError(error as ErrorModel);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, [endpoint.root, globalContext.language]);

    return { data, invalidate: fetchData, loading, error };
};