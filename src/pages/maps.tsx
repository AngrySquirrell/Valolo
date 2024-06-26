import React from "react";
import { MapsModel } from "../script/types/MapsModel";
import { useValorantAPI } from "../script/hooks/useValorantAPI";
import CenteredContent from "../components/CenteredContent";

const Maps = () => {
    const { data } = useValorantAPI<MapsModel>({ root: "maps" });
    return <CenteredContent>Maps</CenteredContent>;
};

export default Maps;
