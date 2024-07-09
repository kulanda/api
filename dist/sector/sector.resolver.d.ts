import { SectorType, CreateSectorArgs } from './dto';
import { SectorService } from './sector.service';
export declare class SectorResolver {
    private sectorService;
    constructor(sectorService: SectorService);
    createSector(data: CreateSectorArgs): Promise<SectorType>;
    getSectors(): Promise<SectorType[]>;
    getSector(id: string): Promise<SectorType>;
}
