import { AssetBySeriesResponse, AssetMetadataDto } from 'src/models';
export declare class AssetProvenanceEvmController {
    getAssetsBySeries(creatorId: string, seriesId: string, idx: number, pageSize: number): AssetBySeriesResponse;
    getAssetMetadata(creatorId: string, assetId: string): AssetMetadataDto;
    registerAsset(): void;
    setAssetUri(assetId: string, uri: string, hash: string): void;
    updateDocumentHash(assetId: string, hash: string): void;
    updateAssetDescription(assetId: string, description: string): void;
    addTagToAsset(assetId: string, tag: string): void;
    removeTagFromAsset(assetId: string, tag: string): void;
}
