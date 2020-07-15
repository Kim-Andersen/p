import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';

import mount from 'koa-mount';
import { apiApp } from './api-app';
import { webApp } from './web-app';

const PORT = process.env.PORT || 3000;
const mainApp = new Koa();

/** Middlewares */
mainApp.use(logger());
apiApp.use(logger());
webApp.use(logger());

mainApp.use(mount('/', webApp));
mainApp.use(mount('/api', apiApp));

mainApp.listen(PORT, () => console.log('Server started.'));
