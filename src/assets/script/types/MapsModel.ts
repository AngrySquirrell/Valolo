type DataModel = {
    uuid: string;
    displayName: string;
    narrativeDescription: string;
    tacticalDescription: string;
    coordinates: string;
    displayIcon: string;
    listViewIcon: string;
    listViewIconTall: string;
    splash: string;
    stylizedBackgroundImage: string;
    premierBackgroundImage: string;
    assetPath: string;
    mapUrl: string;
    xMultiplier: number;
    yMultiplier: number;
    xScalarToAdd: number;
    yScalarToAdd: number;
    callouts: calloutsDataModel[];
};
type calloutsDataModel = {
    regionName: string;
    superRegionName: string;
    location: {
        x: number;
        y: number;
    };
};

export type MapsModel = {
    status: number;
    data: DataModel[];
};
export type MapModel = {
    status: number;
    data: DataModel;
};
