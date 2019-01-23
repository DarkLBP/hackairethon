import {Controller, Route} from '../router-decorators';
import {Request, Response} from 'express';

@Controller('/api')
class AuthController {
    @Route('post', '/register')
    public register(_req: Request, res: Response) {
        res.status(501).end();
    }
}
