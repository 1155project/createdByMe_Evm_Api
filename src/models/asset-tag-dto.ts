import { ApiProperty } from "@nestjs/swagger";

export class AssetTagDto {
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
        description: 'The target tag. The tag can only be a maximum of 31 characters in length.',
        required: true,
        type: 'string'
    })
    tag: string;
}