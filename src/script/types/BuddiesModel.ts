type DataModel = {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    assetPath: string;
    levels: LevelModel[];
};
type LevelModel = {
    uuid: string;
    charmLevel: number;
    hideIfNotOwned: boolean;
    displayName: string;
    displayIcon: string;
    assetPath: string;
};

export type BuddiesModel = {
    status: number;
    data: DataModel[];
};
