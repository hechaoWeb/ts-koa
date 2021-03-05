import * as Koa from 'koa';
import { TgError } from '../utils/error'
import err from '../utils/error'

class ErrorCatch {
  static async catch(ctx:Koa.Context,next:Koa.Next){
    try {
      await next()
    } catch (error) {
      if(error instanceof TgError){
        ctx.body = error
      }else{
        ctx.body = err.HTTP_ERROR('服务异常')
      }
    }
  }
}

export default ErrorCatch