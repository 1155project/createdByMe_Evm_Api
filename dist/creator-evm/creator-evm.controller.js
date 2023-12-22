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
exports.CreatorEvmController = void 0;
const common_1 = require("@nestjs/common");
const creator_evm_service_1 = require("./creator-evm.service");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
let CreatorEvmController = class CreatorEvmController {
    constructor(creatorNameService) {
        this.creatorNameService = creatorNameService;
    }
    getCreatorId(displayName) {
        return this.creatorNameService.getCreatorId(displayName);
    }
    getCreatorName(creatorId) {
        return this.creatorNameService.getCreatorName(creatorId);
    }
    isCreatorNameAvailable(displayName) {
        return this.creatorNameService.isCreatorNameAvailable(displayName);
    }
    getRegisteredCreators(index, pageSize) {
        return new models_1.ReqisteredCreatorResponse();
    }
    setCreatorName(creatorNameDto) {
        this.creatorNameService.setCreatorName(creatorNameDto.creatorId, creatorNameDto.displayName);
    }
};
exports.CreatorEvmController = CreatorEvmController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'displayName',
        description: "The display name of the creator you want the id for.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('creatorId/:displayName'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CreatorEvmController.prototype, "getCreatorId", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'creatorId',
        description: "The ID creator you want the display name for.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('creatorName/:creatorId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CreatorEvmController.prototype, "getCreatorName", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'displayName',
        description: "The display name you want to check is availabe.",
        required: true,
        type: String,
    }),
    (0, common_1.Get)('available/:displayName'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], CreatorEvmController.prototype, "isCreatorNameAvailable", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'index',
        description: "The first index to return for this page of data.",
        required: true,
        type: Number
    }),
    (0, swagger_1.ApiParam)({
        name: 'pageSize',
        description: "The number of row to retireve at a time.",
        required: true,
        type: Number,
        example: 100
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Paginated registered creator addresses response.',
        type: models_1.ReqisteredCreatorResponse,
        isArray: false
    }),
    (0, common_1.Get)('registeredCreators'),
    __param(0, (0, common_1.Query)('index')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", models_1.ReqisteredCreatorResponse)
], CreatorEvmController.prototype, "getRegisteredCreators", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: [models_1.CreatorNameDto] }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.CreatorNameDto]),
    __metadata("design:returntype", void 0)
], CreatorEvmController.prototype, "setCreatorName", null);
exports.CreatorEvmController = CreatorEvmController = __decorate([
    (0, swagger_1.ApiTags)('creatorEvmService'),
    (0, common_1.Controller)('creatorEvm'),
    __metadata("design:paramtypes", [creator_evm_service_1.CreatorEvmService])
], CreatorEvmController);
//# sourceMappingURL=creator-evm.controller.js.map