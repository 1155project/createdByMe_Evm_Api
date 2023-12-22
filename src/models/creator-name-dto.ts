import { ApiProperty } from "@nestjs/swagger";

export class CreatorNameDto {
    @ApiProperty()
    creatorId: string;
    @ApiProperty()
    displayName: string;
}