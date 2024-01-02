import { Injectable } from '@nestjs/common';
import { EvmHelpers } from '../evm-helpers';
import { RegisteredProvenanceAddressessResponse } from 'src/models';

@Injectable()
export class AssetCreatorFactoryService {
    async registerCreator(creatorId: string, story: string, defaultUri: string): Promise<void> {
        const inst = EvmHelpers.assetCreatorInstance;
        inst.deployCreatorContract(creatorId, story, defaultUri);
    }

    async getRegisteredAssetProvenanceContracts(idx: number, pageSize: number): Promise<RegisteredProvenanceAddressessResponse> {
        const inst = EvmHelpers.assetCreatorInstance;
        const resp = await inst.getRegisteredCreators(idx, pageSize);
        console.log(`resp: ${resp}`);
        const result = new RegisteredProvenanceAddressessResponse();
        let addresses = [];

        if (resp.count > 0) {
            addresses = resp.creatorAddresses.filter(r => { 
                if (r.toString() != '0x0000000000000000000000000000000000000000') {
                   return r.toString();
                }
            });
        }

        result.count = parseInt(resp[1].toString());
        result.totalCount = parseInt(resp[2].toString());
        result.creatorAddresses = addresses
        result.nextPageIndex = 1;
        result.pageIndex = 1;

        return result;
    }
}