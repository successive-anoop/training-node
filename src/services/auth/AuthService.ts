import IUser from '../../entities/IUser';
import { Nullable } from '../../libs/Nullable';
import UserRepository from '../../repositories/business/user/repository';
import JWT_Implementation from '../../libs/JWT_Implementation';
class AuthService {

  // tslint:disable-next-line:variable-name
  private _userRepository: UserRepository;

  public constructor() {
    this._userRepository = new UserRepository();
  }
  

  public async login(query): Promise<string> {
    console.log("login")
    const { id, email, password } = query;
    
    const userObject = await this._userRepository.login({
      id,email,password
    });
    console.log("userObject ",userObject)
    return new JWT_Implementation().signJWT(userObject);
  }

}

export default AuthService;
