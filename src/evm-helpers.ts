import { AbstractProvider, Contract, Wallet, ethers } from "ethers";
import { APP_CONFIG } from "./app.config";
import { AssetCreatorFactoryAbi, AssetProvenanceAbi, CreatorNameServiceAbi } from 'src/abi';

class Helpers {
  provider : AbstractProvider;
  signer: Wallet;
  public assetCreatorInstance : Contract;
  public assetProvenanceInstance : Contract;
  public creatorNameserviceInstance : Contract;

  constructor() {
    this.provider = this.getProvider();
    this.signer = new ethers.Wallet(APP_CONFIG.envSpecific.walletSecret, this.provider);
    this.assetCreatorInstance = this.getAssetCreatorInstance();
    this.creatorNameserviceInstance = this.getCreatorNameserviceInstance();
  }

  getProvider() : AbstractProvider {
    return new ethers.JsonRpcProvider(APP_CONFIG.envSpecific.nodeUrl);
  }

  getAssetCreatorInstance (): Contract {
    const contractAbi = new AssetCreatorFactoryAbi();
    return new ethers.Contract( APP_CONFIG.envSpecific.assetCreatorFactoryAddress , contractAbi.abi, this.signer);
  }

  getAssetProvenanceInstance (address: string): Contract {
    const contractAbi = new AssetProvenanceAbi();
    return new ethers.Contract( address, contractAbi.abi, this.signer);
  }

  getCreatorNameserviceInstance (): Contract {
    console.log(`CreatorNameService Address: ${APP_CONFIG.envSpecific.creatorNameServiceAddress}`);
    const contractAbi = new CreatorNameServiceAbi();
    return new ethers.Contract( APP_CONFIG.envSpecific.creatorNameServiceAddress, contractAbi.abi, this.signer);
  }
}

export const EvmHelpers = new Helpers();