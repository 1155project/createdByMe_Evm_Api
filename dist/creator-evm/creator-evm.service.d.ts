export declare class CreatorEvmService {
    getCreatorId(displayName: string): string;
    getCreatorName(creatorId: string): string;
    isCreatorNameAvailable(displayName: string): boolean;
    setCreatorName(creatorId: string, displayName: string): void;
}
