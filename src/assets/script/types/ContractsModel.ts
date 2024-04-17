// status int32
// data object[] {9}
// uuid string
// displayName string (localized)
// displayIcon string
// shipIt boolean
// useLevelVPCostOverride boolean
// levelVPCostOverride int32
// freeRewardScheduleUuid string
// content object {5}
// relationType string
// relationUuid string
// chapters object[] {3}
// isEpilogue boolean
// levels object[] {6}
// reward object {4}
// type string
// uuid string
// amount int32
// isHighlighted boolean
// xp int32
// vpCost int32
// isPurchasableWithVP boolean
// doughCost int32
// isPurchasableWithDough boolean
// freeRewards object[] {4}
// type string
// uuid string
// amount int32
// isHighlighted boolean
// premiumRewardScheduleUuid string
// premiumVPCost int32
// assetPath string

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
