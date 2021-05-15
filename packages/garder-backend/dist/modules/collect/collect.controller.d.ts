import { CollectService } from './collect.service';
import { CollectErrorDto } from './dto/collect-error.dto';
export declare class CollectController {
    private collectService;
    constructor(collectService: CollectService);
    test(): string;
    collect(collectErrorDto: CollectErrorDto): Promise<boolean>;
}
