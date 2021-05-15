import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ERROR_FIELD } from 'garder-common';

export type CollectDocument = Collect & Document;

@Schema()
export class Collect {
  @Prop()
  [ERROR_FIELD.COL]: number;

  @Prop()
  [ERROR_FIELD.MESSAGE]: string;

  @Prop()
  [ERROR_FIELD.ROW]: number;

  @Prop()
  [ERROR_FIELD.STACK]: string;

  @Prop()
  [ERROR_FIELD.TIMESTAMP]: number;
}

export const CollectSchema = SchemaFactory.createForClass(Collect);
