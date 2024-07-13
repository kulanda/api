import { CompanyType } from "./dto";
import { CompanyService } from "./company.service";
import { StoreType } from "src/store/dto";
import { StoreService } from "src/store/store.service";
import { CAEType } from "src/cae/dto";
import { CaeService } from "src/cae/CAE.service";
export declare class CompanyResolver {
    private companyService;
    private storeService;
    private caeService;
    constructor(companyService: CompanyService, storeService: StoreService, caeService: CaeService);
    getCompany(req: any): Promise<CompanyType>;
    stores(req: any, company: CompanyType): Promise<StoreType[]>;
    cae(company: CompanyType): Promise<CAEType>;
}
