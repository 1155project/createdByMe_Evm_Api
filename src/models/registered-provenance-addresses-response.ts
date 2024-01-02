import { ApiProperty } from "@nestjs/swagger";
import { PagedDataResponse } from './paged-data-response';

export class RegisteredProvenanceAddressessResponse extends PagedDataResponse {
    @ApiProperty({
        description: 'An array of creator addresses',
        example: '["0x00000000deadbeef","0x1234567890abcdef"]',
    })
    creatorAddresses: string[];
}