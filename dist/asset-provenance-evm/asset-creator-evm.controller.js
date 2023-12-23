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
exports.AssetCreatorEvmController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
let AssetCreatorEvmController = class AssetCreatorEvmController {
    getCreatorMetadata(creatorId) {
        return new models_1.CreatorMetadataDto();
    }
    updateCreatorStory(request) {
    }
};
exports.AssetCreatorEvmController = AssetCreatorEvmController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'creatorId',
        description: "The id of the creator to fetch metadata for.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('creatorMetadata/:creatorId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", models_1.CreatorMetadataDto)
], AssetCreatorEvmController.prototype, "getCreatorMetadata", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: [models_1.CreatorStoryDto] }),
    (0, common_1.Post)('/updateCreatorStory'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.CreatorStoryDto]),
    __metadata("design:returntype", void 0)
], AssetCreatorEvmController.prototype, "updateCreatorStory", null);
exports.AssetCreatorEvmController = AssetCreatorEvmController = __decorate([
    (0, swagger_1.ApiTags)('assetCreatorEvmService'),
    (0, common_1.Controller)('asset-creator-evm')
], AssetCreatorEvmController);
//# sourceMappingURL=asset-creator-evm.controller.js.map