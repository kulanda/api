import { CAEType, CreateCAEArgs } from "./dto";
import { CaeService } from "./CAE.service";
export declare class CaeResolver {
    private cAEService;
    constructor(cAEService: CaeService);
    createCAE(req: any, data: CreateCAEArgs): Promise<CAEType>;
    getCategories(req: any): Promise<CAEType[]>;
    getCAE(req: any, id: string): Promise<CAEType>;
}
