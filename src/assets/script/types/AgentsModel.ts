type DataModel = {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: string[];
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string;
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isBaseContent: boolean;

    roles: roleModel;
    recruitmentData: recruitmentDataModel;
    abilities: abilityModel[];
    voiceLines: voiceLineModel;
};

type roleModel = {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
};
type recruitmentDataModel = {
    counterId: string;
    milestoneId: string;
    milestoneThreshold: number;
    useLevelVpCostOverride: boolean;
    levelVpCostOverride: number;
    startDate: string;
    endDate: string;
};
type abilityModel = {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
};
type voiceLineModel = {
    minDuration: number;
    maxDuration: number;
    mediaList: {
        id: number;
        wwise: string;
        wave: string;
    }[];
};

export type AgentsModel = {
    status: number;
    data: DataModel[];
};
export type AgentModel = {
    status: number;
    data: DataModel;
};
