import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableDocument {
  id: string;
  name: string;
  userId:string;
  email:string;
  password:string;
  role:string;
}
