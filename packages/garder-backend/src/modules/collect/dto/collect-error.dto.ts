import { IsNotEmpty } from 'class-validator';
import { IReportError } from 'garder-common';

export class CollectErrorDto {
  @IsNotEmpty()
  data: Array<IReportError>;
}
