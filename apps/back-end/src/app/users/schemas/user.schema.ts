import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { app } from '../../../main';
import { ISendMailOptions } from '@nestjs-modules/mailer';
import { MailService } from '../../common/mail/mail.service';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop()
  email: string;

  @Prop()
  socialId?: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;

  @Prop({
    methods: Function,
  })
  async send(sendMailOptions: Omit<ISendMailOptions, 'to'>) {
    const mailService = app.get(MailService);
    await mailService.send({
      to: this.email,
      ...sendMailOptions,
    });
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
