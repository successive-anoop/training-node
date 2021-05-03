import * as mongoose from 'mongoose';
import { Nullable } from '../../../libs/Nullable';
import VersioningRepository from '../../versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryGet, IQueryList, IQueryUpdate } from './entities';
import IProductModel from './IModel';
import { productModel } from './model';

export default class ProductRepository extends VersioningRepository<IProductModel,
  mongoose.Model<IProductModel>> {

  constructor() {
    super(productModel);
  }
  /**
   * Get product list.
   * @property {number} skip - Number of records to be skipped.
   * @property {number} limit - Limit number of records to be returned.
   * @returns {Product[]}
   */
  public async list(options: IQueryList): Promise<IProductModel[]> {

    console.debug('Product - List query: ', options);

    return super.getAll({}, options);
  }

  /**
   * Get product.
   * @property {string} id - _id of the record
   * @returns {Product}
   */
  public async get(query: IQueryGet): Promise<Nullable<IProductModel>> {

    console.debug('ProductRepository - Get: ');
    return super.getById(query.id);
  }

  /**
   * Create new product
   * @property {string} name - The name of record.
   * @returns {Product}
   */
  public async create(options: IQueryCreate): Promise<IProductModel> {
    console.debug('ProductRepository - Create: ');
    return super.create(options);
  }

  /**
   * Update new product
   * @property {string} name - The name of record.
   * @returns {Product}
   */
  public async update(options: IQueryUpdate): Promise<IProductModel> {
    console.debug('ProductRepository - Update: ');
    return super.update(options);
  }
  /**
   * Delete product
   * @property {string} body.name - The name of record.
   * @returns {Product}
   */
  public async delete(query: IQueryDelete): Promise<IProductModel> {
    console.debug('ProductRepository - Delete: ');
    return super.remove(query.id);
  }

  /**
   * Hard Delete product
   * @property {string} body.name - The name of record.
   * @returns {Product}
   */
  public async hardDelete(query: IQueryDelete): Promise<IProductModel> {
    console.debug('ProductRepository - Hard Delete: ');
    return super.hardRemove(query);
  }
}
