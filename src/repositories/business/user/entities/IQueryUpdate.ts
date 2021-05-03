import { IQueryBaseUpdate } from '../../../entities';

export default interface IQueryUpdate extends IQueryBaseUpdate {
  name?: string;
  userId?:string;
  email?:string;
  password?:string;
  role?:string
}
