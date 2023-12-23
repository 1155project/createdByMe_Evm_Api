import { ApiProperty } from "@nestjs/swagger";

export class CreatorMetadataDto {
    @ApiProperty({
        description: 'Id of the target creator.',
        required: true,
        type: 'string'
    })
    creatorId: string;

    @ApiProperty({
        description: 'The display name or moniker of the creator.',
        required: true,
        type: 'string'
    })
    creatorName: string;
        
    @ApiProperty({
        description: 'The creator\'s story. Limit to 1024 characters or less.',
        required: true,
        type: 'string',
        maxLength: 1024
    })
    story: string;

    @ApiProperty({
        description: 'The number of assets currently registered by the creator.',
        required: true,
        type: 'number'
    })
    assetCount: number;
}