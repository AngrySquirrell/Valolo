import React from "react";
import { MapsModel } from "../script/types/MapsModel";
import { useValorantAPI } from "../script/hooks/useValorantAPI";
import { WeaponsModel } from "../script/types/WeaponsModel";
import CenteredContent from "../components/CenteredContent";

const Maps = () => {
    const { data, loading } = useValorantAPI<WeaponsModel>({ root: "weapons" });
    data;
    return <CenteredContent>Weapons</CenteredContent>;
};

export default Maps;
