import * as Koa from 'koa';
import {get,pathBefore} from '../utils/decors'

class UserApis {

  @pathBefore('/api')
  static path: string;

  @get('/user')
  static getUser = (ctx:Koa.Context) => {
    ctx.body = {message:1111}
  }
}

export default UserApis