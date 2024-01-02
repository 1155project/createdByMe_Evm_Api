import { Controller, Get, Body, Post, Query, Param } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { SeriesDto, SeriesResponse } from 'src/models';
import { AssetCreatorFactoryService } from './asset-creator-factory.service';
import { AssetProverenanceEvmService } from './asset-provenance-evm.service';

@ApiTags('assetSeriesEvmService')
@Controller('asset-series-evm')
export class AssetSeriesEvmController {
    constructor(private readonly assetCreatorService: AssetCreatorFactoryService, private readonly assetProvenanceService: AssetProverenanceEvmService) {}

    @ApiParam({
        name: 'creatorId',
        description: "The id of the creator the series belongs to.",
        required: true,
        type: String,
    })    
    @Get('seriesList/:creatorId')
    async getSeriesList(@Param('creatorId') creatorId: string, @Query('idx') idx: number, @Query('pageSize') pageSize: number): Promise<SeriesResponse> {
        return this.assetProvenanceService.getSeriesList(creatorId, idx, pageSize);
    }
    
    @ApiParam({
        name: 'creatorId',
        description: "The id of the creator the series belongs to.",
        required: true,
        type: String,
    })    
    @ApiParam({
        name: 'seriesId',
        description: "The series id to fetch metadata for.",
        required: true,
        type: String,
    })
    @Get('seriesMetadata/:creatorId/:seriesId')
    async getSeriesMetadata(@Param('creatorId') creatorId: string, @Param('seriesId') seriesId: string): Promise<SeriesDto> {
        return this.assetProvenanceService.getSeriesMetadata(creatorId, seriesId);
    }

    @ApiBody({ type: SeriesDto })
    @Post('updateSeriesDescription')
    async updateSeriesDescription(@Body() request: SeriesDto): Promise<void> {
        return this.assetProvenanceService.updateSeriesDescription(request.creatorId, request.seriesId, request.description);
    }

    @ApiBody({ type: SeriesDto })
    @Post()
    async createSeries(@Body() request: SeriesDto): Promise<void> {
        return this.assetProvenanceService.createSeries(request.creatorId, request.seriesId, request.description);
    }
}