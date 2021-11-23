import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OvoQuebradoDocument = OvoQuebrado & Document;

@Schema()
export class OvoQuebrado {
  @Prop({ required: true })
  incubadora: string;

  @Prop({ required: true })
  temperatura: number;

  @Prop({ required: true })
  quantidade: number;

  @Prop({ required: true })
  createdAt: Date;
}

export const OvoQuebradoSchema = SchemaFactory.createForClass(OvoQuebrado);
