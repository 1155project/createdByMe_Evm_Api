import { Controller, Get, Body, Post, Query, Delete, Param } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AssetIdsResponse, AssetDescriptionDto, AssetMetadataDto, AssetMetadataUrlDto, AssetTagDto, RegisterAssetDto } from 'src/models';
import { AssetCreatorFactoryService } from './asset-creator-factory.service';
import { AssetProverenanceEvmService } from './asset-provenance-evm.service';

@ApiTags('assetProvenanceEvmService')
@Controller('asset-provenance-evm')
export class AssetProvenanceEvmController {
    constructor(private readonly assetCreatorService: AssetCreatorFactoryService, private readonly assetProvenanceService: AssetProverenanceEvmService) {}

    @ApiParam({
        name: 'creatorId',
        description: "The id of the creator the series belongs to.",
        required: true,
        type: String,
    })  
    @ApiParam({
        name: 'seriesId',
        description: "The series to fetch assets by.",
        required: true,
        type: String,
      })
    @Get('assetIdsBySeries/:creatorId/:seriesId')
    async getAssetIdsBySeries(@Param('creatorId') creatorId: string, @Param('seriesId') seriesId: string, @Query('idx') idx: number, @Query('pageSize') pageSize: number): Promise<AssetIdsResponse> {
        return this.assetProvenanceService.getAssetIdsBySeries(creatorId, seriesId, idx, pageSize);
    }

    @ApiParam({
        name: 'creatorId',
        description: "The id of the creator the asset belongs to.",
        required: true,
        type: String,
    })  
    @ApiParam({
        name: 'assetId',
        description: "The asset id to fetch metadata for.",
        required: true,
        type: String,
    })
    @Get('assetMetadata/:creatorId/:assetId')
    async getAssetMetadata (@Param('creatorId') creatorId: string, @Param('assetId') assetId: string): Promise<AssetMetadataDto> {
        return this.assetProvenanceService.getAssetMetadata(creatorId, assetId);
    }

    @ApiBody({ type: AssetMetadataDto })
    @Post('register')
    async registerAsset(@Body() request: AssetMetadataDto): Promise<void> {
        return this.assetProvenanceService.registerAsset(request);
        // RegisterAssetDto
    }

    @ApiBody({ type: AssetMetadataUrlDto })
    @Post('setAssetUri')
    async setAssetUri (@Body() request: AssetMetadataUrlDto): Promise<void> {
        return this.assetProvenanceService.setAssetUri(request.creatorId, request.assetId, request.uri, request.hash);
    }

    @ApiBody({ type: AssetDescriptionDto })
    @Post('setDescription')
    async updateAssetDescription(@Body() request: AssetDescriptionDto): Promise<void> {
        return this.assetProvenanceService.updateAssetDescription(request.creatorId, request.assetId, request.description);
    }

    @ApiBody({ type: AssetTagDto })
    @Post('addTag')
    async addTagToAsset(@Body() request: AssetTagDto): Promise<void> {
        return this.assetProvenanceService.addTagToAsset(request.creatorId, request.assetId, request.tag);
    }

    @ApiBody({ type: AssetTagDto })
    @Delete('removeTag')
    async removeTagFromAsset(@Body() request: AssetTagDto): Promise<void> {
        return this.assetProvenanceService.removeTagFromAsset(request.creatorId, request.assetId, request.tag);
    }

}
