import IEntity from './IEntity';

export default interface IProduct extends IEntity {
  name: string;
  productId:string;
  type:string;
  quantity:number;
  price:number;
}
