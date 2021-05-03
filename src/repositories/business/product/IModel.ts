import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IProductModel extends IVersionableDocument {
  id: string;
  name: string;
  productId:string;
  type:string;
  quantity:number;
  price:number;
}
