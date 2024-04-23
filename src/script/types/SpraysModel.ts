// status int32
// data object[] {13}
//      uuid string
//      displayName string (localized)
//      category string
//      themeUuid string
//      isNullSpray boolean
//      hideIfNotOwned boolean
//      displayIcon string
//      fullIcon string
//      fullTransparentIcon string
//      animationPng string
//      animationGif string
//      assetPath string
//      levels object[] {5}
//          uuid string
//          sprayLevel int32
//          displayName string (localized)
//          displayIcon string
//          assetPath string

type DataModel = {
    uuid: string;
    displayName: string;
    category: string;
    themeUuid: string;
    isNullSpray: boolean;
    hideIfNotOwned: boolean;
    displayIcon: string;
    fullIcon: string;
    fullTransparentIcon: string;
    animationPng: string;
    animationGif: string;
    assetPath: string;
    levels: LevelModel[];
};
type LevelModel = {
    uuid: string;
    sprayLevel: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
};

export type SpraysModel = {
    status: number;
    data: DataModel[];
};
export type SprayModel = {
    status: number;
    data: DataModel;
};
export type SpraysLevelModel = {
    status: number;
    data: LevelModel[];
};
export type SprayLevelModel = {
    status: number;
    data: LevelModel;
};
