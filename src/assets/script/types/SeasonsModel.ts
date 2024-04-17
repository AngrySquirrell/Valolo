// status int32
// data object[] {7}
//      uuid string
//      displayName string (localized)
//      type string
//      startTime dateTime
//      endTime dateTime
//      parentUuid string
//      assetPath string

type DataModel = {
    uuid: string;
    displayName: string;
    type: string;
    startTime: string;
    endTime: string;
    parentUuid: string;
    assetPath: string;
};

export type SeasonsModel = {
    status: number;
    data: DataModel[];
};
export type SeasonModel = {
    status: number;
    data: DataModel;
};
