import { PagedResponse } from "src/interfaces";
export declare class PagedDataResponse implements PagedResponse {
    pageIndex: number;
    nextPageIndex: number;
    count: number;
    totalCount: number;
}
