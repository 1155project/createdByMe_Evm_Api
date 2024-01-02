import { Injectable } from '@nestjs/common';
import { EvmHelpers } from '../evm-helpers';
import { AssetCreatorFactoryService } from './asset-creator-factory.service';
import { CreatorEvmService } from '../creator-evm';
import { Contract, ethers } from 'ethers';
import { AssetIdsResponse, AssetMetadataDto, CreatorMetadataDto, SeriesDto, SeriesResponse } from '../models';
//import { toUtf8Bytes, formatBytes32String, parseBytes32String } from "@ethersproject/strings";

@Injectable()
export class AssetProverenanceEvmService {
    //constructor(private readonly creatorNameService: CreatorEvmService, private readonly assetCreatorService: AssetCreatorFactoryService) {}
    
    async createSeries(creatorId: string, seriesId: string, description: string) : Promise<any>{
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const convertedSeriesId = ethers.encodeBytes32String(seriesId);

        console.log(`creatSeries req: ${creatorId}, ${convertedSeriesId}, ${description}`);
        const resp = provenanceInst.createSeries(convertedSeriesId, description);
        console.log(`creatSeries resp: ${JSON.stringify(resp)}`);
        return resp;
    }

    async getAssetIdsBySeries(creatorId: string, seriesId: string, idx: number, pageSize: number): Promise<AssetIdsResponse> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const convertedSeriesID = ethers.encodeBytes32String(seriesId);

        const resp = await provenanceInst.getAssetsBySeries(convertedSeriesID, idx, pageSize);

        const result = new AssetIdsResponse();      
        result.assetIds = EvmHelpers.numbersToHex(resp.assetIds, true);
        result.count = parseInt(resp.count.toString());
        result.totalCount = parseInt(resp.totalCount.toString());
        result.nextPageIndex = 1;
        result.pageIndex = 1;
        
        return result;
    }

    async getAssetMetadata (creatorId: string, assetId: string) : Promise<AssetMetadataDto> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const resp = await provenanceInst.getAssetMetadata(assetId);
        const result = new AssetMetadataDto();

        result.assetId = EvmHelpers.dec2hex(resp.id.toString());
        result.creatorId = resp.creator;
        result.description = resp.description;
        result.documentHash = resp.documentHash.toString();
        result.seriesId = ethers.decodeBytes32String(resp.seriesId);
        result.tags = this.decode32ByteStrings(resp.tags);
        result.url = resp.url;

        return result;
    }

    /// @notice Returns information about this creator.
    async getCreatorMetadata (creatorId: string) : Promise<CreatorMetadataDto> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const resp = await provenanceInst.getCreatorMetadata();
        const result = new CreatorMetadataDto();

        result.assetCount = parseInt(resp.assetCount.toString());
        result.creatorId = resp.creator;
        result.creatorName = resp.displayName;
        result.story = resp.story;

        return result;
    }

    async getSeriesList(creatorId: string, idx: number, pageSize: number): Promise<SeriesResponse> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const resp = await provenanceInst.getSeriesList(idx, pageSize);
        const result = new SeriesResponse();

        result.count = parseInt(resp.count.toString());
        result.nextPageIndex = 1;
        result.pageIndex = 1;
        result.seriesIds = this.decode32ByteStrings(resp.seriesIds);
        result.totalCount = parseInt(resp.totalCount.toString());

        return result;
    }

    async getSeriesMetadata(creatorId: string, seriesId: string): Promise<SeriesDto> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const converted = ethers.encodeBytes32String(seriesId);
        const resp = await provenanceInst.getSeriesMetadata(converted);

        const result = new SeriesDto();
        result.creatorId = creatorId;
        result.seriesId = seriesId;
        result.description = resp;

        return result;
    }
// AssetMetadataDto
    async registerAsset(request: AssetMetadataDto): Promise<void> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(request.creatorId);
        const convertedSeriesId = ethers.encodeBytes32String(request.seriesId);
        const convertedTags = this.encodeTo32ByteStrings(request.tags);
        await provenanceInst.registerAsset(request.assetId, convertedSeriesId, request.description, convertedTags);

        if(request.url.length > 0) {
            let hash = '0x0';
            if (request.documentHash.length > 0) hash = request.documentHash;
            await provenanceInst.setAssetUri (request.assetId, request.url, hash);
        }
    }

    async setAssetUri (creatorId: string, assetId: string, url: string, documentHash): Promise<void> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        let hash = '0x0';
        
        if (documentHash.length > 0) hash = documentHash;

        await provenanceInst.setAssetUri (assetId, url, hash);
    }

    async updateSeriesDescription(creatorId: string, seriesId: string, description: string): Promise<void> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const convertedSeriesId = ethers.encodeBytes32String(seriesId);

        return provenanceInst.updateSeriesDescription(convertedSeriesId, description);
    }

    async updateAssetDescription(creatorId: string, assetId: string, description: string): Promise<void> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        return provenanceInst.updateAssetDescription(assetId, description);
    }

    async updateCreatorStory(creatorId: string, story): Promise<void> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        return provenanceInst.updateCreatorStory(story);
    }

    async addTagToAsset(creatorId: string, assetId: string, tag: string): Promise<void> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const convertedTag = ethers.encodeBytes32String(tag);

        return provenanceInst.addTagToAsset(assetId, convertedTag);
    }

    async removeTagFromAsset(creatorId: string, assetId: string, tag: string): Promise<void> {
        const provenanceInst = await this.getAssetProvenanceContractInstance(creatorId);
        const convertedTag = ethers.encodeBytes32String(tag);

        return provenanceInst.removeTagFromAsset(assetId, convertedTag);
    }

    private async getAssetProvenanceContractInstance(creatorId: string): Promise<Contract> {
        const creatoNameServiceInst = EvmHelpers.creatorNameserviceInstance;
        const targetAddress = await creatoNameServiceInst.getCreatorAssetProvenanceAddress(creatorId);
        return EvmHelpers.getAssetProvenanceInstance(targetAddress);
    }

    private decode32ByteStrings(targets: string[]) : string[] {
        const converted = targets.map(t => {
            const s = ethers.decodeBytes32String(t);
            if (s != '') {
                return s;
            }
        });
        
        return converted.filter(c => {
            if (c !== null) return c;
        });
    }

    private encodeTo32ByteStrings(targets: string[]) : string[] {
        return targets.map(t => {
            return ethers.encodeBytes32String(t);
        });
    }
}