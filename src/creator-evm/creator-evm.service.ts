import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatorEvmService {


    getCreatorId (displayName: string) : string {
        return "0x000000000000000000000000DEADBEEF";
    }

    getCreatorName (creatorId : string) : string {
        return "CLEM";
    }

    isCreatorNameAvailable(displayName : string) : boolean {
        return false;
    }

    setCreatorName (creatorId : string, displayName: string) {
        
    }
}