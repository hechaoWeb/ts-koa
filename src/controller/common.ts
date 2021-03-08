import * as Koa from 'koa';
import { get } from '../utils/decors';

class LoginApis {
  @get('/')
  static index = (ctx: Koa.Context) => {
    ctx.body = {message: 'helloWord'};
  }
}

export default LoginApis;