import { IQueryBaseCreate } from '../../../entities';

export default interface ICreate extends IQueryBaseCreate {
  name: string;
  productId:string;
  type:string;
  quantity:number;
  price:number;
}
