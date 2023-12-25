import { Injectable } from '@nestjs/common';
import { AbstractProvider, ethers } from 'ethers';
import { APP_CONFIG } from './app.config';

@Injectable()
export class AppService {
  async getBalance(address: string): Promise<string> {
    const provider = this.getProvider();
                                
    return provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      const balanceInEth = ethers.formatEther(balance)
      return balanceInEth;
     })
  }

  getProvider() : AbstractProvider {
    return new ethers.JsonRpcProvider(APP_CONFIG.envSpecific.nodeUrl);
  }
}
