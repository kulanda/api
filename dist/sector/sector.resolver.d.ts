import { SectorType, CreateSectorArgs } from "./dto";
import { SectorService } from "./sector.service";
export declare class SectorResolver {
    private sectorService;
    constructor(sectorService: SectorService);
    createSector(req: any, data: CreateSectorArgs): Promise<SectorType>;
    getSectors(req: any): Promise<SectorType[]>;
    getSector(req: any, id: string): Promise<SectorType>;
}
