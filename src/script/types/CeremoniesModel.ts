type DataModel = {
    uuid: string;
    displayName: string;
    assetPath: string;
};

export type CeremoniesModel = {
    status: number;
    data: DataModel[];
};
