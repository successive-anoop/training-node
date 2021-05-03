import IProduct from '../../entities/IProduct';
import { Nullable } from '../../libs/Nullable';
import ProductService from '../../services/product/ProductService';
import { SystemResponse } from '../../libs/utilities';

class ProductController {
  public static getInstance() {
    if (!ProductController.instance) {
      ProductController.instance = new ProductController();
    }

    return ProductController.instance;
  }
  private static instance: ProductController;

  /* tslint:disable: variable-name */
  private _userService: ProductService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this._userService =  new ProductService();
  }

  /**
   * Get home list.
   * @property {number} skip - Number of messages to be skipped.
   * @property {number} limit - Limit number of messages to be returned.
   * @returns {IHome[]}
   */
  public async list(req, res, next): Promise<IProduct[]> {
    try {
      const { limit, skip } = req.query;
      const result = await ProductController.getInstance()._userService.list(limit, skip);
      if (!result.length) {
        return next(SystemResponse.badRequestError('Data not found', ''));
      }
      return res.send(SystemResponse.success('List of homes', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Get home.
   * @property {string} id - Number of messages to be skipped.
   * @returns {IHome}
   */
  public async get(req, res, next): Promise<Nullable<IProduct>> {
    try {
      const { id } = req.params;
      const result = await ProductController.getInstance()._userService.get({id});
      if (!result) {
        return next(SystemResponse.badRequestError('Data not found', ''));
      }
      return res.send(SystemResponse.success('Home', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Create new home
   * @property {string} name - The name of hello world.
   * @returns {IProduct}
   */
  public async create(req, res, next) {
    try {
      const { name,productId, type,quantity,price } = req.body;
      const result = await ProductController.getInstance()._userService.create({
        name,productId, type,quantity,price
      });
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to create', ''));
      }
      return res.send(SystemResponse.success('Product created', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Update the home
   * @param id {string} - The id of the home.
   * @param name {string} -The updated name
   * @returns {IHome}
   */
  public async update(req, res, next) {
    try {
      const { id, name } = req.body;
      const result = await ProductController.getInstance()._userService.update({
        name,
        originalId: id,
      });
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to update', ''));
      }
      return res.send(SystemResponse.success('Home updated', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Delete the home
   * @param id {string} The id of the home
   */
  public async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await ProductController.getInstance()._userService.delete({
        id,
      });
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to delete', ''));
      }
      return res.send(SystemResponse.success('Home deleted', result));
    } catch (err) {
      return next(err);
    }
  }

}

export default ProductController.getInstance();
