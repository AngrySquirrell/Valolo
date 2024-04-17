type DataModel = {
    manifestId: string;
    branch: string;
    version: string;
    buildVersion: string;
    engineVersion: string;
    riotClientVersion: string;
    riotClientBuild: string;
    buildDate: string;
};

export type VersionModel = {
    status: number;
    data: DataModel;
};
