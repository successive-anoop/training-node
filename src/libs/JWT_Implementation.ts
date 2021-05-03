
const jwt = require('jsonwebtoken');

export default class JWT_Implementation {
  public signJWT(userObject):string{
    const {id, userId,role} = userObject;
    console.log(userObject);
    return jwt.sign({id, userId,role}, "privateKey");
  }
  public decodeJWT(jwtToken):object{    
    return jwt.verify(jwtToken, 'privateKey');
  }
}
