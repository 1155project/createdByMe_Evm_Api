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
exports.CreatorMetadataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatorMetadataDto {
}
exports.CreatorMetadataDto = CreatorMetadataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of the target creator.',
        required: true,
        type: 'string'
    }),
    __metadata("design:type", String)
], CreatorMetadataDto.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The display name or moniker of the creator.',
        required: true,
        type: 'string'
    }),
    __metadata("design:type", String)
], CreatorMetadataDto.prototype, "creatorName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The creator\'s story. Limit to 1024 characters or less.',
        required: true,
        type: 'string',
        maxLength: 1024
    }),
    __metadata("design:type", String)
], CreatorMetadataDto.prototype, "story", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of assets currently registered by the creator.',
        required: true,
        type: 'number'
    }),
    __metadata("design:type", Number)
], CreatorMetadataDto.prototype, "assetCount", void 0);
//# sourceMappingURL=creator-metadata-dto.js.map