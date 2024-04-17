type DataModel = {
    uuid: string;
    displayName: string;
    displayNameSubText: string;
    description: string;
    extraDescription: string;
    promoDescription: string;
    useAdditionalContext: boolean;
    displayIcon: string;
    displayIcon2: string;
    logoIcon: string;
    verticalPromoImage: string;
    assetPath: string;
};

export type BundlesModel = {
    status: number;
    data: DataModel[];
};
