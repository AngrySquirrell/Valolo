type DataModel = {
    uuid: string;
    displayName: string;
    shortDisplayName: string;
    startTime: string;
    endTime: string;
    assetPath: string;
};

export type EventsModel = {
    status: number;
    data: DataModel[];
};
export type EventModel = {
    status: number;
    data: DataModel;
};
