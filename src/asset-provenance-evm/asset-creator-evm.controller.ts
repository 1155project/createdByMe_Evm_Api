import { Controller, Get, Body, Post, Query, Param } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatorMetadataDto, CreatorStoryDto } from 'src/models';

@ApiTags('assetCreatorEvmService')
@Controller('asset-creator-evm')
export class AssetCreatorEvmController {
    @ApiParam({
        name: 'creatorId',
        description: "The id of the creator to fetch metadata for.",
        required: true,
        type: String,
    })  
    @Get('creatorMetadata/:creatorId')
    getCreatorMetadata (@Param('creatorId') creatorId: string): CreatorMetadataDto {
        return new CreatorMetadataDto();
    }

    @ApiBody({ type: [CreatorStoryDto] })
    @Post('/updateCreatorStory')
    updateCreatorStory(@Body() request: CreatorStoryDto) {

    }
}