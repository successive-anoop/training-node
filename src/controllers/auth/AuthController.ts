import { Nullable } from '../../libs/Nullable';
import { UserService, AuthService  } from '../../services';
import { SystemResponse } from '../../libs/utilities';
//import { IUser } from 'src/entities';

class AuthController {
  public static getInstance() {
    if (!AuthController.instance) {
      AuthController.instance = new AuthController();
    }

    return AuthController.instance;
  }
  private static instance: AuthController;

  /* tslint:disable: variable-name */
  private _userService: UserService;
  private _authService: AuthService;
  /* tslint:disable: no-null-keyword */
  private constructor() {
    this._userService =  new UserService();
    this._authService = new AuthService();
  }


  /**
   * Create new home
   * @property {string} name - The name of hello world.
   * @returns {IUser}
   */
   public async login(req, res, next) {
     console.log(req.body)
    try {
      const { email,password } = req.body;
      const result = await AuthController.getInstance()._authService.login({
        email,password
      });
      console.log("result\t", result);
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to create', ''));
      }
      return res.send(SystemResponse.success('Home created', result));
    } catch (err) {
      return next(err);
    }
  }

}

export default AuthController.getInstance();
