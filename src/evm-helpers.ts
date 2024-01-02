import { AbstractProvider, Contract, Wallet, ethers } from "ethers";
import { APP_CONFIG } from "./app.config";
import { AssetCreatorFactoryAbi, AssetProvenanceAbi, CreatorNameServiceAbi } from './abi';

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

  dec2hex(str): string {
      let dec = str.toString().split(''), sum = [], hex = [], i, s
      while(dec.length){
          s = 1 * dec.shift()
          for(i = 0; s || i < sum.length; i++){
              s += (sum[i] || 0) * 10
              sum[i] = s % 16
              s = (s - sum[i]) / 16
          }
      }
      while(sum.length){
          hex.push(sum.pop().toString(16));
      }
      return `0x${hex.join('')}`;
  }

  numbersToHex(vals: string[], filterEmptyNull: boolean): string[] {
    let data = vals;
    if (filterEmptyNull) {
      data = vals.filter(v => {
        if (v !== null && v !== '') {
          return v;
        }
      })
    }

    const result = data.map(d => {
      return this.dec2hex(d);
    });

    return result;
  } 
}

export const EvmHelpers = new Helpers();