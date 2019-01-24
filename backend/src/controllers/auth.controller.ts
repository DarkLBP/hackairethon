import {Controller, Route} from '../router-decorators';
import {Request, Response} from 'express';
import {Validator} from '../validator';

@Controller('/api')
class AuthController {
    @Route('post', '/register')
    public register(req: Request, res: Response) {
        const result = Validator.validate(req, {email: 'email', password: 'filled'});
        if (!result) {
            res.status(400).end();
        }
        res.status(200).end();
    }
}
