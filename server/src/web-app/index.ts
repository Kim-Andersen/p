import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';

import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

/** Middlewares */
app.use(logger());
app.use(bodyParser());

/** Routes */
app.use(router.routes()).use(router.allowedMethods());

router.get('/', async (ctx: Koa.Context, next: () => Promise<unknown>) => {
  ctx.type = 'html';
  ctx.body = `
    <html>
      <body>
        <h3>p web app here!</h3>

        <a href="/api">Go to the API</a>
      </body>
    </html>
  `;

  await next();
});

// router.post('/data', async (ctx: Koa.Context, next: () => Promise<unknown>) => {
//   ctx.body = { message: 'This is your POST route, attached you can find the data you sent', body: ctx.request.body };

//   await next();
// });

export const webApp = app;
