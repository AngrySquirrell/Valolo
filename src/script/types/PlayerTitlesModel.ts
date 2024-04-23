// status int32
// data object[] {5}
//      uuid string
//      displayName string (localized)
//      titleText string (localized)
//      isHiddenIfNotOwned boolean
//      assetPath string

type DataModel = {
    uuid: string;
    displayName: string;
    titleText: string;
    isHiddenIfNotOwned: boolean;
    assetPath: string;
};

export type PlayerTitlesModel = {
    status: number;
    data: DataModel[];
};
export type PlayerTitleModel = {
    status: number;
    data: DataModel;
};
