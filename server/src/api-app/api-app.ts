import Koa from 'koa';
import Router from 'koa-router';

import json from 'koa-json';

const app = new Koa();
const router = new Router();

/** Middlewares */
app.use(json());

/** Routes */
app.use(router.routes()).use(router.allowedMethods());

router.get('/', async (ctx: Koa.Context, next: () => Promise<unknown>) => {
  ctx.body = { message: 'Welcome to the p API!' };

  await next();
});

export default app;
