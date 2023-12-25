import { Injectable } from '@nestjs/common';
import { EvmHelpers } from '../evm-helpers';

@Injectable()
export class CreatorEvmService {

    async getCreatorId (displayName: string) : Promise<string> {
        const inst = EvmHelpers.creatorNameserviceInstance;
        return inst.getCreatorId(displayName);
    }

    async getCreatorName (creatorId : string) : Promise<string> {
        const inst = EvmHelpers.creatorNameserviceInstance;
        return inst.getCreatorName(creatorId);
    }

    async isCreatorNameAvailable(displayName : string) : Promise<boolean> {
        const inst = EvmHelpers.creatorNameserviceInstance;
        return inst.isCreatorNameAvailable(displayName);
    }

    async setCreatorName (creatorId : string, displayName: string) : Promise<void> {
        const inst = EvmHelpers.creatorNameserviceInstance;
        console.log(`creatorNameserviceInstance: ${inst}`);
        console.log(`creatorId: ${creatorId}, displayName: ${displayName}`);
        await inst.setCreatorName(creatorId, displayName);
    }
}