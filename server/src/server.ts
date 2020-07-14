import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-json';

import bodyParser from 'koa-bodyparser';

const PORT = process.env.PORT || 3000;
const app = new Koa();
const router = new Router();

/** Middlewares */
app.use(json());
app.use(logger());
app.use(bodyParser());

/** Routes */
app.use(router.routes()).use(router.allowedMethods());

router.get('/', async (ctx: Koa.Context, next: () => Promise<unknown>) => {
  ctx.body = { message: 'This is your GET route 222' };

  await next();
});

router.post('/data', async (ctx: Koa.Context, next: () => Promise<unknown>) => {
  ctx.body = { message: 'This is your POST route, attached you can find the data you sent', body: ctx.request.body };

  await next();
});

app.listen(PORT, () => console.log('Server started.'));
