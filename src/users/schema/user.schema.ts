import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;
  @Prop({
    require: true,
  })
  passwordHash: string;
  @Prop({
    default: false,
  })
  isEmailVerified: boolean;
  @Prop({
    default: false,
  })
  emailVerificationToken: string | null;
  @Prop({
    default: null,
  })
  emailVerificationExpires: Date | null;
  @Prop({
    default: null,
  })
  refreshTokenHash: string | null;
  @Prop({
    default: null,
  })
  passwordResetToken: string | null;
  @Prop({
    default: null,
  })
  passwordResetExpires: Date | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
