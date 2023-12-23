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
exports.AssetProvenanceEvmController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
let AssetProvenanceEvmController = class AssetProvenanceEvmController {
    getAssetsBySeries(creatorId, seriesId, idx, pageSize) {
        return new models_1.AssetBySeriesResponse();
    }
    getAssetMetadata(creatorId, assetId) {
        return new models_1.AssetMetadataDto();
    }
    registerAsset() {
    }
    setAssetUri(assetId, uri, hash) {
    }
    updateDocumentHash(assetId, hash) {
    }
    updateAssetDescription(assetId, description) {
    }
    addTagToAsset(assetId, tag) {
    }
    removeTagFromAsset(assetId, tag) {
    }
};
exports.AssetProvenanceEvmController = AssetProvenanceEvmController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'creatorId',
        description: "The id of the creator the series belongs to.",
        required: true,
        type: String,
    }),
    (0, swagger_1.ApiParam)({
        name: 'seriesId',
        description: "The series to fetch assets by.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('assetBySeries/:creatorId/:seriesId'),
    __param(2, (0, common_1.Query)('idx')),
    __param(3, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", models_1.AssetBySeriesResponse)
], AssetProvenanceEvmController.prototype, "getAssetsBySeries", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'creatorId',
        description: "The id of the creator the asset belongs to.",
        required: true,
        type: String,
    }),
    (0, swagger_1.ApiParam)({
        name: 'assetId',
        description: "The asset id to fetch metadata for.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('assetMetadata/:creatorId/:assetId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", models_1.AssetMetadataDto)
], AssetProvenanceEvmController.prototype, "getAssetMetadata", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AssetProvenanceEvmController.prototype, "registerAsset", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AssetProvenanceEvmController.prototype, "setAssetUri", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AssetProvenanceEvmController.prototype, "updateDocumentHash", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AssetProvenanceEvmController.prototype, "updateAssetDescription", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AssetProvenanceEvmController.prototype, "addTagToAsset", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AssetProvenanceEvmController.prototype, "removeTagFromAsset", null);
exports.AssetProvenanceEvmController = AssetProvenanceEvmController = __decorate([
    (0, swagger_1.ApiTags)('assetProvenanceEvmService'),
    (0, common_1.Controller)('asset-provenance-evm')
], AssetProvenanceEvmController);
//# sourceMappingURL=asset-provenance-evm.controller.js.map