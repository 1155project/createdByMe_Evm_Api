import { Controller, Get, Body, Post, Query, Param } from '@nestjs/common';
import { CreatorEvmService } from './creator-evm.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { RegisteredProvenanceAddressessResponse } from '../models';
import { AssetCreatorFactoryService } from '../asset-provenance-evm';
import { RegisterCreatorDto } from '../models/register-creator-dto';

@ApiTags('creatorEvmService')
@Controller('creatorEvm')
export class CreatorEvmController {
  constructor(private readonly creatorNameService: CreatorEvmService, private readonly assetCreatorService: AssetCreatorFactoryService) {}

  @ApiParam({
    name: 'displayName',
    description: "The display name of the creator you want the id for.",
    required: true,
    type: String,
  })
  @Get('creatorId/:displayName')
  getCreatorId (@Param('displayName') displayName: string) : Promise<string> {
    console.log(`displayName: ${displayName}`);
    return this.creatorNameService.getCreatorId(displayName);
  }

  @ApiParam({
    name: 'creatorId',
    description: "The ID creator you want the display name for.",
    required: true,
    type: String,
  })
  @Get('creatorName/:creatorId')
  async getCreatorName (@Param('creatorId') creatorId : string) : Promise<string> {
    return this.creatorNameService.getCreatorName(creatorId);
  }

  @ApiParam({
    name: 'displayName',
    description: "The display name you want to check is availabe.",
    required: true,
    type: String,
  })
  @Get('available/:displayName')
  async isCreatorNameAvailable(@Param('displayName') displayName : string) : Promise<boolean >{
    return this.creatorNameService.isCreatorNameAvailable(displayName);
  }

  // @ApiParam({
  //   name: 'index',
  //   description: "The first index to return for this page of data.",
  //   required: true,
  //   type: Number
  // })  
  // @ApiParam({
  //   name: 'pageSize',
  //   description: "The number of row to retireve at a time.",
  //   required: true,
  //   type: Number,
  //   example: 100
  // })
  @ApiOkResponse({
    description: 'Paginated registered creator addresses response.',
    type: RegisteredProvenanceAddressessResponse,
    isArray: false
  })
  @Get('registeredCreators')
  async getRegisteredAssetProvenanceContracts (@Query('index') index: number, @Query('pageSize') pageSize: number) : Promise<RegisteredProvenanceAddressessResponse> {
    return this.assetCreatorService.getRegisteredAssetProvenanceContracts(index, pageSize);
  }

  @ApiBody({ type: RegisterCreatorDto })
  @Post('register')
  async registerCreator (@Body() request: RegisterCreatorDto): Promise<void> {
      await this.creatorNameService.setCreatorName(request.creatorId, request.displayName);

      return this.assetCreatorService.registerCreator(request.creatorId, request.story, request.defaultUrl);
  }
}