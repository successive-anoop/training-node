import * as mongoose from 'mongoose';
import { Nullable } from '../../../libs/Nullable';
import VersioningRepository from '../../versionable/VersioningRepository';
import { IQueryLogin } from './entities';
import IHomeModel from './IModel';
import { homeModel } from './model';

export default class AuthRepository extends VersioningRepository<IHomeModel,
  mongoose.Model<IHomeModel>> {

  constructor() {
    super(homeModel);
  }
}
