import { Controller, Get, Body, Post, Query, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AssetBySeriesResponse, AssetDescriptionDto, AssetMetadataDto, AssetMetadataUrlDto, AssetTagDto, RegisterAssetDto } from 'src/models';

@ApiTags('assetProvenanceEvmService')
@Controller('asset-provenance-evm')
export class AssetProvenanceEvmController {
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
    @Get('assetBySeries/:creatorId/:seriesId')
    getAssetsBySeries(creatorId: string, seriesId: string, @Query('idx') idx: number, @Query('pageSize') pageSize: number): AssetBySeriesResponse {
        return new AssetBySeriesResponse();
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
    getAssetMetadata (creatorId: string, assetId: string): AssetMetadataDto {
        return new AssetMetadataDto();
    }

    @ApiBody({ type: [RegisterAssetDto] })
    @Post('register')
    registerAsset(@Body() request: RegisterAssetDto) {

    }

    @ApiBody({ type: [AssetMetadataUrlDto] })
    @Post('setAssetUri')
    setAssetUri (@Body() request: AssetMetadataUrlDto) {

    }

    @ApiBody({ type: [AssetDescriptionDto] })
    @Post('setDescription')
    updateAssetDescription(@Body() request: AssetDescriptionDto) {

    }

    @ApiBody({ type: [AssetTagDto] })
    @Post('addTag')
    addTagToAsset(@Body() request: AssetTagDto) {

    }

    @ApiBody({ type: [AssetTagDto] })
    @Delete('removeTag')
    removeTagFromAsset(@Body() request: AssetTagDto) {

    }
}
