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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetMetadataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AssetMetadataDto {
}
exports.AssetMetadataDto = AssetMetadataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of the creator the asset will be registered to.',
        required: true,
        type: 'string'
    }),
    __metadata("design:type", String)
], AssetMetadataDto.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique id of the asset (usually an RFID tag id).',
        required: true,
        type: 'string'
    }),
    __metadata("design:type", String)
], AssetMetadataDto.prototype, "assetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the asset. Limit to 1024 characters or less.',
        required: true,
        type: 'string',
        maxLength: 1024
    }),
    __metadata("design:type", String)
], AssetMetadataDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The series the asset should be associated with. Limited to 31 characters or less. If not provided, the asset is not associated with a series.',
        required: false,
        type: 'string',
        maxLength: 31
    }),
    __metadata("design:type", String)
], AssetMetadataDto.prototype, "seriesId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL of the NFT metadata associated with the asset.',
        type: 'string'
    }),
    __metadata("design:type", String)
], AssetMetadataDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hash of the NFT\'s metadata document.',
        type: 'string'
    }),
    __metadata("design:type", String)
], AssetMetadataDto.prototype, "documentHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'An array of identifying tags. Each tag can only be a maximum of 31 characters in length. Tags can be used by consumers to group and filter assets',
        required: false,
        type: 'string[]',
        isArray: true
    }),
    __metadata("design:type", Array)
], AssetMetadataDto.prototype, "tags", void 0);
//# sourceMappingURL=asset-metadata-dto.js.map