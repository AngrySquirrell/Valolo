// status int32
// data object[] {9}
// uuid string
// displayName string (localized)
// devName string
// rank int32
// juiceValue int32
// juiceCost int32
// highlightColor string
// displayIcon string
// assetPath string
type DataModel = {
    uuid: string;
    displayName: string;
    devName: string;
    rank: number;
    juiceValue: number;
    juiceCost: number;
    highlightColor: string;
    displayIcon: string;
    assetPath: string;
};

export type ContentsModel = {
    status: number;
    data: DataModel[];
};
