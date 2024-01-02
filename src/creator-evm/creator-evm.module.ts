import { Module } from '@nestjs/common';
import { CreatorEvmController } from './creator-evm.controller';
import { CreatorEvmService } from './creator-evm.service';
import { AssetCreatorFactoryService, AssetEvmModule } from '../asset-provenance-evm';

@Module({
  imports: [AssetEvmModule],
  controllers: [CreatorEvmController],
  providers: [CreatorEvmService, AssetCreatorFactoryService],
})
export class CreatorEvmModule {}
