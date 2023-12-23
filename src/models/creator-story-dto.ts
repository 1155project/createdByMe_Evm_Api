import { ApiProperty } from "@nestjs/swagger";

export class CreatorStoryDto {
    @ApiProperty({
        description: 'Id of the target creator.',
        required: true,
        type: 'string'
    })
    creatorId: string;
    
    @ApiProperty({
        description: 'The creator\'s story. Limit to 1024 characters or less.',
        required: true,
        type: 'string',
        maxLength: 1024
    })
    story: string;
}