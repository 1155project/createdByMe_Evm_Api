import { SeriesDto, SeriesResponse } from 'src/models';
export declare class AssetSeriesEvmController {
    getSeriesList(creatorId: string, idx: number, pageSize: number): SeriesResponse;
    getSeriesMetadata(creatorId: string, seriesId: string): string;
    updateSeriesDescription(request: SeriesDto): void;
    createSeries(request: SeriesDto): void;
}
