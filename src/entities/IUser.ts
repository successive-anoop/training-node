import IEntity from './IEntity';

export default interface IUser extends IEntity {
  name: string;
  userId:string;
  email:string;
  password:string;
  role:string
}
