import { Controller, Get, Body, Post, Query, Param } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatorMetadataDto, CreatorStoryDto } from 'src/models';
import { AssetCreatorFactoryService } from './asset-creator-factory.service';
import { AssetProverenanceEvmService } from './asset-provenance-evm.service';

@ApiTags('assetCreatorEvmService')
@Controller('asset-creator-evm')
export class AssetCreatorEvmController {
    constructor(private readonly assetCreatorService: AssetCreatorFactoryService, private readonly assetProvenanceService: AssetProverenanceEvmService) {}

    @ApiParam({
        name: 'creatorId',
        description: "The id of the creator to fetch metadata for.",
        required: true,
        type: String,
    })  
    @Get('creatorMetadata/:creatorId')
    async getCreatorMetadata (@Param('creatorId') creatorId: string): Promise<CreatorMetadataDto> {
        return this.assetProvenanceService.getCreatorMetadata(creatorId);
    }

    @ApiBody({ type: CreatorStoryDto })
    @Post('/updateCreatorStory')
    async updateCreatorStory(@Body() request: CreatorStoryDto) {
        return this.assetProvenanceService.updateCreatorStory(request.creatorId, request.story);
    }
}