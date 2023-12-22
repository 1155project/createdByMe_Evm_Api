import { Module } from '@nestjs/common';
import { CreatorEvmController } from './creator-evm.controller';
import { CreatorEvmService } from './creator-evm.service';

@Module({
  imports: [],
  controllers: [CreatorEvmController],
  providers: [CreatorEvmService],
})
export class CreatorEvmModule {}
