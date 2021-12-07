import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  senha: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

UsuarioSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('senha')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['senha'], 10);
    this['senha'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
