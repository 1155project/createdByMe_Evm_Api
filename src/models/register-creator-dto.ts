import { ApiProperty } from "@nestjs/swagger";

export class RegisterCreatorDto {
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
    displayName: string;

    @ApiProperty({
        description: 'The creator\'s story.',
        required: true,
        type: String,
        maxLength: 1024
    })
    story: string;

    @ApiProperty({
        description: 'The default NFT Metadata file URL for this creator.',
        required: true,
        type: String,
    })
    defaultUrl: string;
}