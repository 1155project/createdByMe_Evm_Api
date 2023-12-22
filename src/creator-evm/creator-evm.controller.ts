import { Controller, Get, Body, Post, Query } from '@nestjs/common';
import { CreatorEvmService } from './creator-evm.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatorNameDto, ReqisteredCreatorResponse } from '../models';

@ApiTags('creatorEvmService')
@Controller('creatorEvm')
export class CreatorEvmController {
  constructor(private readonly creatorNameService: CreatorEvmService) {}

  @ApiParam({
    name: 'displayName',
    description: "The display name of the creator you want the id for.",
    required: true,
    type: String,
  })
  @Get('creatorId/:displayName')
  getCreatorId (displayName: string) : string {
    return this.creatorNameService.getCreatorId(displayName);
  }

  @ApiParam({
    name: 'creatorId',
    description: "The ID creator you want the display name for.",
    required: true,
    type: String,
  })
  @Get('creatorName/:creatorId')
  getCreatorName (creatorId : string) : string {
    return this.creatorNameService.getCreatorName(creatorId);
  }

  @ApiParam({
    name: 'displayName',
    description: "The display name you want to check is availabe.",
    required: true,
    type: String,
  })
  @Get('available/:displayName')
  isCreatorNameAvailable(displayName : string) : boolean {
    return this.creatorNameService.isCreatorNameAvailable(displayName);
  }

  @ApiParam({
    name: 'index',
    description: "The first index to return for this page of data.",
    required: true,
    type: Number
  })  
  @ApiParam({
    name: 'pageSize',
    description: "The number of row to retireve at a time.",
    required: true,
    type: Number,
    example: 100
  })
  @ApiOkResponse({
    description: 'Paginated registered creator addresses response.',
    type: ReqisteredCreatorResponse,
    isArray: false
  })
  @Get('registeredCreators')
  getRegisteredCreators (@Query('index') index: number, @Query('pageSize') pageSize: number) : ReqisteredCreatorResponse {
    return new ReqisteredCreatorResponse();
  }

  @ApiBody({ type: [CreatorNameDto] })
  @Post('register')
  setCreatorName (@Body() creatorNameDto: CreatorNameDto) {
      this.creatorNameService.setCreatorName(creatorNameDto.creatorId, creatorNameDto.displayName);
  }
}