import Koa from 'koa';
import json from 'koa-json';
import Router from 'koa-router';
import Place from '../models/Place';

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

router.get('/places', async (ctx: Koa.Context, next: () => Promise<unknown>) => {
  const places = await Place.findAll();
  ctx.body = { places };
  await next();
});

export const apiApp = app;
