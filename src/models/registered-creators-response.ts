import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "src/interfaces";

export class ReqisteredCreatorResponse implements PagedResponse {
    @ApiProperty({
        description: 'An array of creator addresses',
        example: '["0x00000000deadbeef","0x1234567890abcdef"]',
    })
    creatorAddresses: string[];

    @ApiProperty({
        description: 'The start index of this page.'
    })
    pageIndex: number;

    @ApiProperty({
        description: 'The start index of the next page.'
    })
    nextPageIndex: number;

    @ApiProperty({
        description: 'The number of rows returned.'
    })
    count: number;

    @ApiProperty({
        description: 'The total number of rows available.'
    })
    totalCount: number;
}