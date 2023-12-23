import { ApiProperty } from "@nestjs/swagger";
import { PagedDataResponse } from './paged-data-response';

export class SeriesResponse  extends PagedDataResponse{
    @ApiProperty({
        description: 'An array of seriesIds',
        example: '["SummerRelease","EliteSeries"]',
    })
    seriesIds: string[];
}