type DataModel = {
    uuid: string;
    displayName: string;
    category: string;
    defaultSkinUuid: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
    weaponStats: WeaponStatsModel;
    shopData: ShopDataModel;
    skins: SkinModel[];
};
type WeaponStatsModel = {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
    adsStats: AdsStatsModel;
    altShotgunStats: AltShotgunStatsModel;
    airBurstStats: AirBurstStatsModel;
    damageRanges: DamageRangeModel[];
};
type AdsStatsModel = {
    zoomMultiplier: number;
    fireRate: number;
    runSpeedMultiplier: number;
    burstCount: number;
    firstBulletAccuracy: number;
};
type AltShotgunStatsModel = {
    shotgunPelletCount: number;
    burstRate: number;
};
type AirBurstStatsModel = {
    shotgunPelletCount: number;
    burstDistance: number;
};
type DamageRangeModel = {
    rangeStartMeters: number;
    rangeEndMeters: number;
    headDamage: number;
    bodyDamage: number;
    legDamage: number;
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
type SkinModel = {
    uuid: string;
    displayName: string;
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: string;
    assetPath: string;
    chromas: ChromaModel[];
    levels: LevelModel[];
};
type ChromaModel = {
    uuid: string;
    displayName: string;
    displayIcon: string;
    fullRender: string;
    swatch: string;
    streamedVideo: string;
    assetPath: string;
};
type LevelModel = {
    uuid: string;
    displayName: string;
    levelItem: string;
    displayIcon: string;
    streamedVideo: string;
    assetPath: string;
};

export type WeaponsModel = {
    status: number;
    data: DataModel[];
};
export type WeaponModel = {
    status: number;
    data: DataModel;
};
