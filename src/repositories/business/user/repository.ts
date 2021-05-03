import * as mongoose from 'mongoose';
import { Nullable } from '../../../libs/Nullable';
import VersioningRepository from '../../versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryGet, IQueryList, IQueryUpdate, IQueryLogin } from './entities';
import IUserModel from './IModel';
import { userModel } from './model';

export default class UserRepository extends VersioningRepository<IUserModel,
  mongoose.Model<IUserModel>> {

  constructor() {
    super(userModel);
  }
  /**
   * Get User list.
   * @property {number} skip - Number of records to be skipped.
   * @property {number} limit - Limit number of records to be returned.
   * @returns {User[]}
   */
  public async list(options: IQueryList): Promise<IUserModel[]> {

    console.debug('User - List query: ', options);

    return super.getAll({}, options);
  }

  /**
   * Get User.
   * @property {string} id - _id of the record
   * @returns {User}
   */
  public async get(query: IQueryGet): Promise<Nullable<IUserModel>> {

    console.debug('UserRepository - Get: ');
    return super.getById(query.id);
  }

  /**
   * Create new User
   * @property {string} name - The name of record.
   * @returns {User}
   */
  public async create(options: IQueryCreate): Promise<IUserModel> {
    console.debug('UserRepository - Create: ');
    return super.create(options);
  }

    /**
   * Login User
   * @property {string} email - email of user.
   * @property {string} password - password of user.
   * @returns {User}
   */
     public async login(options:IQueryLogin): Promise<IUserModel> {
      console.debug('UserRepository - Create: ');
      return super.getByQuery(options);
    }

  /**
   * Update new User
   * @property {string} name - The name of record.
   * @returns {User}
   */
  public async update(options: IQueryUpdate): Promise<IUserModel> {
    console.debug('UserRepository - Update: ');
    return super.update(options);
  }
  /**
   * Delete User
   * @property {string} body.name - The name of record.
   * @returns {User}
   */
  public async delete(query: IQueryDelete): Promise<IUserModel> {
    console.debug('UserRepository - Delete: ');
    return super.remove(query.id);
  }

  /**
   * Hard Delete User
   * @property {string} body.name - The name of record.
   * @returns {User}
   */
  public async hardDelete(query: IQueryDelete): Promise<IUserModel> {
    console.debug('UserRepository - Hard Delete: ');
    return super.hardRemove(query);
  }
}
