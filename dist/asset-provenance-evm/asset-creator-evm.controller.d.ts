import { CreatorMetadataDto, CreatorStoryDto } from 'src/models';
export declare class AssetCreatorEvmController {
    getCreatorMetadata(creatorId: string): CreatorMetadataDto;
    updateCreatorStory(request: CreatorStoryDto): void;
}
