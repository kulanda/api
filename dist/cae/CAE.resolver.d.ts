import { CAEType, CreateCAEArgs } from './dto';
import { CaeService } from './CAE.service';
export declare class CaeResolver {
    private cAEService;
    constructor(cAEService: CaeService);
    createCAE(data: CreateCAEArgs): Promise<CAEType>;
    getCategories(): Promise<CAEType[]>;
    getCAE(id: string): Promise<CAEType>;
}
