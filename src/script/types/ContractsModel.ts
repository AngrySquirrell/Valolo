type DataModel = {
    uuid: string;
    displayName: string;
    displayIcon: string;
    shipIt: boolean;
    useLevelVPCostOverride: boolean;
    levelVPCostOverride: number;
    freeRewardScheduleUuid: string;
    content: ContentModel;

    assetPath: string;
};
type ContentModel = {
    relationType: string;
    relationUuid: string;

    chapters: ChapterModel[];

    premiumRewardScheduleUuid: string;
    premiumVPCost: number;
};
type ChapterModel = {
    isEpilogue: boolean;
    levels: LevelModel[];
    freeRewards: RewardModel[];
};
type LevelModel = {
    reward: RewardModel;
    xp: number;
    vpCost: number;
    isPurchasableWithVP: boolean;
    doughCost: number;
    isPurchasableWithDough: boolean;
};
type RewardModel = {
    type: string;
    uuid: string;
    amount: number;
    isHighlighted: boolean;
};

export type ContractsModel = {
    status: number;
    data: DataModel[];
};
