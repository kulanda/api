import { CompanyType, CreateCompanyArgs } from './dto';
import { CompanyService } from './company.service';
import { StoreType } from 'src/store/dto';
import { StoreService } from 'src/store/store.service';
import { CAEType } from 'src/cae/dto';
import { CaeService } from 'src/cae/CAE.service';
export declare class CompanyResolver {
    private companyService;
    private storeService;
    private caeService;
    constructor(companyService: CompanyService, storeService: StoreService, caeService: CaeService);
    createCompany(userId: string, data: CreateCompanyArgs): Promise<CompanyType>;
    getCompanies(userId: string): Promise<CompanyType[]>;
    getCompany(id: string): Promise<CompanyType>;
    stores(company: CompanyType): Promise<StoreType[]>;
    cae(company: CompanyType): Promise<CAEType>;
}
