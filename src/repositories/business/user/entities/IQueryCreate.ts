import { IQueryBaseCreate } from '../../../entities';

export default interface ICreate extends IQueryBaseCreate {
  name: string;
  userId:string;
  email:string;
  password:string;
  role:string
}
