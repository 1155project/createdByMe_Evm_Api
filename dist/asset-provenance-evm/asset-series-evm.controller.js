"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetSeriesEvmController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
let AssetSeriesEvmController = class AssetSeriesEvmController {
    getSeriesList(creatorId, idx, pageSize) {
        return new models_1.SeriesResponse();
    }
    getSeriesMetadata(creatorId, seriesId) {
        return '';
    }
    updateSeriesDescription(request) {
    }
    createSeries(request) {
    }
};
exports.AssetSeriesEvmController = AssetSeriesEvmController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'creatorId',
        description: "The id of the creator the series belongs to.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('seriesList/:creatorId'),
    __param(1, (0, common_1.Query)('idx')),
    __param(2, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", models_1.SeriesResponse)
], AssetSeriesEvmController.prototype, "getSeriesList", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'creatorId',
        description: "The id of the creator the series belongs to.",
        required: true,
        type: String,
    }),
    (0, swagger_1.ApiParam)({
        name: 'seriesId',
        description: "The series id to fetch metadata for.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('seriesMetadata/:creatorId/:seriesId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], AssetSeriesEvmController.prototype, "getSeriesMetadata", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: [models_1.SeriesDto] }),
    (0, common_1.Post)('updateSeriesDescription'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.SeriesDto]),
    __metadata("design:returntype", void 0)
], AssetSeriesEvmController.prototype, "updateSeriesDescription", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: [models_1.SeriesDto] }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.SeriesDto]),
    __metadata("design:returntype", void 0)
], AssetSeriesEvmController.prototype, "createSeries", null);
exports.AssetSeriesEvmController = AssetSeriesEvmController = __decorate([
    (0, swagger_1.ApiTags)('assetSeriesEvmService'),
    (0, common_1.Controller)('asset-series-evm')
], AssetSeriesEvmController);
//# sourceMappingURL=asset-series-evm.controller.js.map