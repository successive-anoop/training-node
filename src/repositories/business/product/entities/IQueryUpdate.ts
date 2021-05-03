import { IQueryBaseUpdate } from '../../../entities';

export default interface IQueryUpdate extends IQueryBaseUpdate {
  name?: string;
  productId?:string;
  type?:string;
  quantity?:number;
  price?:number;
}
