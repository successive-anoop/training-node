import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IAuthModel extends IVersionableDocument {
  id: string;
  name: string;
}
