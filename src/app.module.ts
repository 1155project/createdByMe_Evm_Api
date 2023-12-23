import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatorEvmModule } from './creator-evm';
import { AssetProvenanceEvmController, AssetCreatorEvmController, AssetSeriesEvmController } from './asset-provenance-evm';

@Module({
  imports: [CreatorEvmModule],
  controllers: [AppController, AssetProvenanceEvmController, AssetCreatorEvmController, AssetSeriesEvmController],
  providers: [AppService],
})
export class AppModule {}
