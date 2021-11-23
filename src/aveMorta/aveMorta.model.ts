import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AveMortaDocument = AveMorta & Document;

@Schema()
export class AveMorta {
  @Prop({ required: true })
  incubadora: string;

  @Prop({ required: true })
  temperatura: number;

  @Prop({ required: true })
  quantidade: number;

  @Prop({ required: true })
  createdAt: Date;
}

export const AveMortaSchema = SchemaFactory.createForClass(AveMorta);
