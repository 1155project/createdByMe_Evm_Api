import { Module } from '@nestjs/common';
import { AssetCreatorFactoryService, AssetProverenanceEvmService } from '../asset-provenance-evm';

@Module({
  imports: [],
  controllers: [],
  providers: [AssetCreatorFactoryService, AssetProverenanceEvmService],
})
export class AssetEvmModule {}
