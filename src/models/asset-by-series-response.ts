import { ApiProperty } from "@nestjs/swagger";
import { PagedDataResponse } from "./paged-data-response";

export class AssetBySeriesResponse extends PagedDataResponse {
    @ApiProperty()
    assetIds: string[];
}