import JWT_Implementation from '../libs/JWT_Implementation';

export default class Authorization {
    private _jwtImplementation : JWT_Implementation;
    constructor(){
        this._jwtImplementation = new JWT_Implementation();
    }
    public static authenticateJWT(req,res,next){
        const authHeader = req.headers.authorization;

        if (authHeader) {
            try{
                const user = new JWT_Implementation().decodeJWT(authHeader);
                console.log(user);
                req.user = user;
                next();
            }catch(err){
                return res.sendStatus(403);
            }

        } else {
            res.sendStatus(401);
        }
    }

    public static isSuperAdmin(req,res,next){
        if(req.user.role === "super_admin"){
            next();
        }
        else{
            return res.sendStatus(403);
        }
    }
    public static isAdmin(req,res,next){
        if(req.user.role === "admin" || req.user.role==="super_admin"){
            next();
        }else
        return res.sendStatus(403);
    }
    public static isUser(req,res,next){
        if(req.user.role === "user"||req.user.role === "admin" || req.user.role==="super_admin"){
            next();
        }else
        return res.sendStatus(403);
    }
}
