// status int32
// data object[] {7}
//      uuid string
//      startTime dateTime
//      endTime dateTime
//      seasonUuid string
//      competitiveTiersUuid string
//      borders object[] {6}
//          uuid string
//          level int32
//          winsRequired int32
//          displayIcon string
//          smallIcon string
//          assetPath string
//      assetPath string

type DataModel = {
    uuid: string;
    startTime: string;
    endTime: string;
    seasonUuid: string;
    competitiveTiersUuid: string;
    borders: BordersModel[];
    assetPath: string;
};
type BordersModel = {
    uuid: string;
    level: number;
    winsRequired: number;
    displayIcon: string;
    smallIcon: string;
    assetPath: string;
};

export type CompetitiveSeasonsModel = {
    status: number;
    data: DataModel[];
};
export type CompetitiveSeasonModel = {
    status: number;
    data: DataModel;
};
