import { Controller, Get, Body, Post, Query, Param } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { SeriesDto, SeriesResponse } from 'src/models';
@ApiTags('assetSeriesEvmService')
@Controller('asset-series-evm')
export class AssetSeriesEvmController {
    @ApiParam({
        name: 'creatorId',
        description: "The id of the creator the series belongs to.",
        required: true,
        type: String,
    })    
    @Get('seriesList/:creatorId')
    getSeriesList(@Param('creatorId') creatorId: string, @Query('idx') idx: number, @Query('pageSize') pageSize: number): SeriesResponse {
        return new SeriesResponse();
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
    getSeriesMetadata(@Param('creatorId') creatorId: string, @Param('seriesId') seriesId: string): string {
        return '';
    }

    @ApiBody({ type: [SeriesDto] })
    @Post('updateSeriesDescription')
    updateSeriesDescription(@Body() request: SeriesDto) {

    }

    @ApiBody({ type: [SeriesDto] })
    @Post()
    createSeries(@Body() request: SeriesDto) {

    }
}