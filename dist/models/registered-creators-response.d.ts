import { PagedResponse } from "src/interfaces";
export declare class ReqisteredCreatorResponse implements PagedResponse {
    creatorAddresses: string[];
    pageIndex: number;
    nextPageIndex: number;
    count: number;
    totalCount: number;
}
