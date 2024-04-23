type DataModel = {
    uuid: string;
    displayName: string;
    displayIcon: string;
    assetPath: string;

    shopData: ShopDataModel;
};
type ShopDataModel = {
    cost: number;
    category: string;
    shopOrderPriority: number;
    categoryText: string;
    gridPosition: {
        row: number;
        column: number;
    };
    canBeTrashed: boolean;
    image: string;
    newImage: string;
    newImage2: string;
    assetPath: string;
};

export type GearsModel = {
    status: number;
    data: DataModel[];
};
export type GearModel = {
    status: number;
    data: DataModel;
};
