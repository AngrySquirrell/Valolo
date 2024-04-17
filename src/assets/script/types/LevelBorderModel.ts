// status int32
// data object[] {6}
// uuid string
// displayName string (localized)
// startingLevel int32
// levelNumberAppearance string
// smallPlayerCardAppearance string
// assetPath string

type DataModel = {
    uuid: string;
    displayName: string;
    startingLevel: number;
    levelNumberAppearance: string;
    smallPlayerCardAppearance: string;
    assetPath: string;
};

export type LevelBordersModel = {
    status: number;
    data: DataModel[];
};
export type LevelBorderModel = {
    status: number;
    data: DataModel;
};
