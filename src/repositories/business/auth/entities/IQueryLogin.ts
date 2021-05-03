import { IQueryBaseGet } from '../../../entities';

export default interface IQueryLogin extends IQueryBaseGet {
  email?: string;
  password?:string;
}
