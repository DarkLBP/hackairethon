import {Controller, Route} from '../router-decorators';
import {Request, Response} from 'express';
import {AuthValidator} from '../validators/auth.validator';

@Controller('/api')
class AuthController {
    @Route('post', '/register')
    public register(req: Request, res: Response) {
        res.json(AuthValidator.validateEmail(req.body.email));
        // res.status(501).end();
    }
}
