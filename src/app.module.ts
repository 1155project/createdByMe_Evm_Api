import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatorEvmModule, CreatorEvmService } from './creator-evm';
import { 
  AssetEvmModule,
  AssetProvenanceEvmController, 
  AssetCreatorEvmController, 
  AssetSeriesEvmController, 
  AssetCreatorFactoryService,
  AssetProverenanceEvmService } from './asset-provenance-evm';

@Module({
  imports: [CreatorEvmModule, AssetEvmModule],
  controllers: [AppController, AssetProvenanceEvmController, AssetCreatorEvmController, AssetSeriesEvmController],
  providers: [AppService, AssetCreatorFactoryService, AssetProverenanceEvmService, CreatorEvmService],
})
export class AppModule {}
