import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModal: Model<UserDocument>,
  ) {}

  async findByEmail(email: string) {
    return this.userModal.findOne({ email });
  }
  async findById(id: string) {
    return this.userModal.findById(id);
  }
  async create(data: Partial<User>) {
    return this.userModal.create(data);
  }
  async update(id: string, data: Partial<User>) {
    return this.userModal.findByIdAndUpdate(id, data, { new: true });
  }
}
