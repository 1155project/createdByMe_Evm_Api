import { ApiProperty } from "@nestjs/swagger";

export class CreatorNameDto {
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
}