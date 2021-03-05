import * as Koa from 'koa';
import {get,pathBefore} from '../utils/decors'

class LoginApis {

  @pathBefore('/api')
  static path: string;

  @get('/login')
  static getUser = (ctx:Koa.Context) => {
    ctx.body = {message:1111}
  }
}

export default LoginApis