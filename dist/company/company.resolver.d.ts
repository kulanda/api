import { CompanyType, CreateCompanyArgs } from "./dto";
import { CompanyService } from "./company.service";
import { CAEType } from "src/cae/dto";
import { CaeService } from "src/cae/CAE.service";
export declare class CompanyResolver {
    private companyService;
    private caeService;
    constructor(companyService: CompanyService, caeService: CaeService);
    createCompany(req: any, data: CreateCompanyArgs): Promise<CompanyType>;
    cae(req: any, company: CompanyType): Promise<CAEType>;
}
