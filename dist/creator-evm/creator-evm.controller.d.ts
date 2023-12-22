import { CreatorEvmService } from './creator-evm.service';
import { CreatorNameDto, ReqisteredCreatorResponse } from '../models';
export declare class CreatorEvmController {
    private readonly creatorNameService;
    constructor(creatorNameService: CreatorEvmService);
    getCreatorId(displayName: string): string;
    getCreatorName(creatorId: string): string;
    isCreatorNameAvailable(displayName: string): boolean;
    getRegisteredCreators(index: number, pageSize: number): ReqisteredCreatorResponse;
    setCreatorName(creatorNameDto: CreatorNameDto): void;
}
