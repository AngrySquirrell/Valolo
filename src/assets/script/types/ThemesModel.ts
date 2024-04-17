type DataModel = {
    uuid: string;
    displayName: string;
    displayIcon: string;
    storeFeaturedImage: string;
    assetPath: string;
};

export type ThemesModel = {
    status: number;
    data: DataModel[];
};
export type ThemeModel = {
    status: number;
    data: DataModel;
};
