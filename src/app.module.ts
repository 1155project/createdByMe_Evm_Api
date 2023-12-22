import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatorEvmModule } from './creator-evm';
import { AssetProvenanceEvmController } from './asset-provenance-evm/asset-provenance-evm.controller';

@Module({
  imports: [CreatorEvmModule],
  controllers: [AppController, AssetProvenanceEvmController],
  providers: [AppService],
})
export class AppModule {}
