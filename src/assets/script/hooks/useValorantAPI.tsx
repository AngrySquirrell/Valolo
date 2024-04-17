import { useContext, useEffect, useState } from "react";
import { EndpointModel } from "../types/Endpoints";
import { ErrorModel } from "../types/ErrorModel";
import { GlobalContext } from "../globalContext";


const useValorantAPI = (endpoint: EndpointModel) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorModel>();
    const language = useContext(GlobalContext);
    const url = "https://valorant-api.com/v1";

    const parseEndpoint = () => {
        let urlvars = endpoint.params.uuid && `/${endpoint.params.uuid}`;
        return `${url}/${endpoint.root}${urlvars}`;
    }
    const parseParameters = () => {

    }

    // let url = `${url}${endpoint.url}`;

    useEffect(() => { }, []);

    const fetchData = async () => {
        setIsLoading(true);
        // let parameters = parseEndpoint();
        // try {
        //     const response = await fetch(target);
        //     const result = await response.json();
        //     setData(result);
        // } catch (error) {
        //     // setError(error);
        // }
        setIsLoading(false);
    }

    const invalidate = () => {

    }

    return { data, invalidate, isLoading, error };
}