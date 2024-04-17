type DataModel = {
    uuid: string;
    displayName: string;
    displayNameSingular: string;
    displayIcon: string;
    largeIcon: string;
    assetPath: string;
};

export type CurrenciesModel = {
    status: number;
    data: DataModel[];
};
export type CurrencieModel = {
    status: number;
    data: DataModel;
};
