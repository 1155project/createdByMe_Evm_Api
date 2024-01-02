import { ApiProperty } from "@nestjs/swagger";
import { PagedDataResponse } from "./paged-data-response";

export class AssetIdsResponse extends PagedDataResponse {
    @ApiProperty()
    assetIds: string[];
}