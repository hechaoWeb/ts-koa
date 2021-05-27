require('./controller/index');
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as swStats from 'swagger-stats';
import * as apiSpec from './swagger.json';
import * as e2k from 'express-to-koa';
import { config } from './config/index';
import { router } from './utils/decors';
import ErrorCatch from './middleware/error';

const app = new Koa();
app.use(e2k(swStats.getMiddleware({ swaggerSpec: apiSpec })));
app.use(ErrorCatch.catch);
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(config.get('port'));

console.log(`应用启动成功 端口:${config.get('port')}`);
