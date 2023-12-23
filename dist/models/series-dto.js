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
exports.SeriesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SeriesDto {
}
exports.SeriesDto = SeriesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of the creator the series belongs to.',
        required: true,
        type: 'string'
    }),
    __metadata("design:type", String)
], SeriesDto.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The target series. Limited to 31 characters or less. If not provided, the asset is not associated with a series.',
        required: true,
        type: 'string',
        maxLength: 31
    }),
    __metadata("design:type", String)
], SeriesDto.prototype, "seriesId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The long description of the series. Limit to 1024 characters or less.',
        required: true,
        type: 'string',
        maxLength: 1024
    }),
    __metadata("design:type", String)
], SeriesDto.prototype, "description", void 0);
//# sourceMappingURL=series-dto.js.map