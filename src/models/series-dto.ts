import { ApiProperty } from "@nestjs/swagger";

export class SeriesDto {
    @ApiProperty({
        description: 'Id of the creator the series belongs to.',
        required: true,
        type: 'string'
    })
    creatorId: string;

    @ApiProperty({
        description: 'The target series. Limited to 31 characters or less. If not provided, the asset is not associated with a series.',
        required: true,
        type: 'string',
        maxLength: 31
    })
    seriesId: string;

    @ApiProperty({
        description: 'The long description of the series. Limit to 1024 characters or less.',
        required: true,
        type: 'string',
        maxLength: 1024
    })
    description: string;
}