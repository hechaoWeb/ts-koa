require('./routes/index')
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { PORT } from './config';
import {router} from './utils/decors'
import ErrorCatch from './middleware/error'

const app = new Koa();

app.use(ErrorCatch.catch)
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(`应用启动成功 端口:${PORT}`);
