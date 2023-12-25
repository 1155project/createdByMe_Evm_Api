import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiParam({
    name: 'address',
    description: "The address to fetch the balance for.",
    required: true,
    type: String
  })  
  @Get('balance/:address')
  async getHello(@Param('address') address: string): Promise<string> {
    console.log(`address: ${address}`);
    return await this.appService.getBalance(address);
  }
}
