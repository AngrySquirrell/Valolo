export type DataModel = {
    uuid: string;
    displayName: string;
    duration: string;
    economyType: string;
    allowsMatchTimeouts: boolean;
    isTeamVoiceAllowed: boolean;
    isMinimapHidden: boolean;
    orbCount: number;
    roundsPerHalf: number;
    teamRoles: string[];

    gameFeatureOverrides: featureOverridesModel[];
    gameRuleBoolOverrides: ruleBoolOverridesModel[];

    displayIcon: string;
    listViewIconTall: string;
    assetPath: string;
};
type featureOverridesModel = {
    featureName: string;
    state: boolean;
};
type ruleBoolOverridesModel = {
    ruleName: string;
    state: boolean;
};

export type GamemodesModel = {
    status: number;
    data: DataModel[];
};
export type GamemodeModel = {
    status: number;
    data: DataModel;
};

type EquippablesDataModel = {
    uuid: string;
    displayName: string;
    category: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
};
export type GamemodeEquippablesModel = {
    status: number;
    data: EquippablesDataModel[];
};
export type GamemodeEquippableModel = {
    status: number;
    data: EquippablesDataModel;
};
