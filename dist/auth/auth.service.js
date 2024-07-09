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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const library_1 = require("@prisma/client/runtime/library");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async signUp(dto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    fullName: dto.fullName,
                    username: dto.username,
                    phone: dto.phone,
                    hash,
                },
            });
            return this.signToken(user.id, user.email);
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentias taken');
                }
            }
            throw error;
        }
    }
    async signIn(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user)
            throw new common_1.ForbiddenException('Credrentials incorrect');
        const pwMacthes = await argon.verify(user.hash, dto.password);
        if (!pwMacthes)
            throw new common_1.ForbiddenException('Credrentials incorrect');
        return this.signToken(user.id, user.email);
    }
    async signInWithPhone(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                phone: dto.phone,
            },
        });
        if (!user)
            throw new common_1.ForbiddenException('Credrentials incorrect');
        const pwMacthes = await argon.verify(user.hash, dto.password);
        if (!pwMacthes)
            throw new common_1.ForbiddenException('Credrentials incorrect');
        return this.signToken(user.id, user.email);
    }
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '1d',
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
    async validateToken(token) {
        try {
            const decoded = this.jwt.verify(token, {
                secret: this.config.get('JWT_SECRET'),
            });
            const user = await this.prisma.user.findUnique({
                where: { id: decoded.sub },
            });
            return user;
        }
        catch (err) {
            return null;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map