import { ApiProperty } from "@nestjs/swagger";

export class AssetMetadataUrlDto {
    @ApiProperty({
        description: 'Id of the creator the atarget asset',
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
        description: 'The URL of the asset metadata file.',
        required: true,
        type: 'string'
    })
    uri: string;

    @ApiProperty({
        description: 'The hashed value of the asset\'s metadata file. Used as a validity check.',
        required: true,
        type: 'string'
    })
    hash: string
}