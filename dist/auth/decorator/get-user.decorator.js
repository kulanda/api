"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.getArgByIndex(2).req;
    if (data && typeof data === 'string') {
        return request.user[data];
    }
    if (data && typeof data === 'object') {
        if (data.access && !data.access.includes(request.user.access)) {
            throw new common_1.UnauthorizedException(`You need a [${data.access.join(', ')}] access.`);
        }
        else if (data.data) {
            return request.user[data.data];
        }
        else
            return request.user;
    }
    return request.user;
});
//# sourceMappingURL=get-user.decorator.js.map