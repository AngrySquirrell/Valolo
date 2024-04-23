// status int32
// data object[] {9}
//      uuid string
//      displayName string (localized)
//      isHiddenIfNotOwned boolean
//      themeUuid string
//      displayIcon string
//      smallArt string
//      wideArt string
//      largeArt string
//      assetPath string

type DataModel = {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;
};

export type PlayerCardsModel = {
    status: number;
    data: DataModel[];
};
export type PlayerCardModel = {
    status: number;
    data: DataModel;
};
