type DataModel = {
    uuid: string;
    assetObjectName: string;
    tiers: TierModel[];

    assetPath: string;
};

type TierModel = {
    tier: number;
    tierName: string;
    division: string;
    divisionName: string;
    color: string;
    backgroundColor: string;
    smallIcon: string;
    largeIcon: string;
    rankTriangleDownIcon: string;
    rankTriangleUpIcon: string;
};

export type CompetitiveModel = {
    status: number;
    data: DataModel[];
};
