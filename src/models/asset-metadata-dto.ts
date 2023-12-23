import { ApiProperty } from "@nestjs/swagger";

export class AssetMetadataDto {
    @ApiProperty({
        description: 'Id of the creator the asset will be registered to.',
        required: true,
        type: 'string'
    })
    creatorId: string;

    @ApiProperty({
        description: 'The unique id of the asset (usually an RFID tag id).',
        required: true,
        type: 'string'
    })
    assetId: string;

    @ApiProperty({
        description: 'The description of the asset. Limit to 1024 characters or less.',
        required: true,
        type: 'string',
        maxLength: 1024
    })
    description: string;

    @ApiProperty({
        description: 'The series the asset should be associated with. Limited to 31 characters or less. If not provided, the asset is not associated with a series.',
        required: false,
        type: 'string',
        maxLength: 31
    })
    seriesId: string;

    @ApiProperty({
        description: 'URL of the NFT metadata associated with the asset.',
        type: 'string'
    })
    url: string;

    @ApiProperty({
        description: 'Hash of the NFT\'s metadata document.',
        type: 'string'
    })
    documentHash: string;

    @ApiProperty({
        description: 'An array of identifying tags. Each tag can only be a maximum of 31 characters in length. Tags can be used by consumers to group and filter assets',
        required: false,
        type: 'string[]',
        isArray: true
    })
    tags: string[];
}