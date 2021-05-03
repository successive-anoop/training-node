import IProduct from '../../entities/IProduct';
import { Nullable } from '../../libs/Nullable';
import ProductRepository from '../../repositories/business/product/repository';

class ProductService {

  // tslint:disable-next-line:variable-name
  private _productRepository: ProductRepository;

  public constructor() {
    this._productRepository = new ProductRepository();
  }
  public async list(limit: number, skip: number): Promise<IProduct[]> {
    return this._productRepository.list({ limit, skip });
  }

  public async get(query): Promise<IProduct> {
    const { id } = query;
    return this._productRepository.get({id});
  }

  public async create(query): Promise<IProduct> {
    const { name, productId, type,quantity,price } = query;
    return this._productRepository.create({
      name, productId, type,quantity,price
    });
  }

  public async update(query): Promise<IProduct> {
    const { name, originalId } = query;
    return this._productRepository.update({
      name,
      originalId,
    });
  }

  public async delete(query): Promise<IProduct> {
    const { id } = query;
    return this._productRepository.delete({
      id,
    });
  }
}

export default ProductService;
