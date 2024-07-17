import { CAEType, CreateCAEArgs } from "./dto";
import { CaeService } from "./CAE.service";
import { SectorType } from "src/sector/dto";
import { SectorService } from "src/sector/sector.service";
export declare class CaeResolver {
    private cAEService;
    private sectorService;
    constructor(cAEService: CaeService, sectorService: SectorService);
    createCAE(data: CreateCAEArgs): Promise<CAEType>;
    getCAEs(): Promise<CAEType[]>;
    getCAE(id: string): Promise<CAEType>;
    sector(cae: CAEType): Promise<SectorType>;
}
