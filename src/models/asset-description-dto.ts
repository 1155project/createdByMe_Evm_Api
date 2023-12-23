import { ApiProperty } from "@nestjs/swagger";

export class AssetDescriptionDto {
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
        description: 'The description of the target tag. The description can only be a maximum of 1024 characters in length.',
        required: true,
        type: 'string'
    })
    description: string;
}