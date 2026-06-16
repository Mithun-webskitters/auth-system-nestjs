import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;
  @Prop({
    required: true,
  })
  passwordHash: string;
  @Prop({
    default: false,
  })
  isEmailVerified: boolean;
  @Prop({
    type: String,
    default: null,
  })
  emailVerificationToken: string | null;
  @Prop({
    type: Date,
    default: null,
  })
  emailVerificationExpires: Date | null;
  @Prop({
    type: String,
    default: null,
  })
  refreshTokenHash: string | null;
  @Prop({
    type: String,
    default: null,
  })
  passwordResetToken: string | null;
  @Prop({
    type: Date,
    default: null,
  })
  passwordResetExpires: Date | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
