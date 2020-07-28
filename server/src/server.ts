import Koa from 'koa';
import logger from 'koa-logger';
import mount from 'koa-mount';
import { apiApp } from './api-app';
import database from './database';
import { webApp } from './web-app';

const PORT = process.env.PORT || 3000;
const mainApp = new Koa();

// Middlewares
mainApp.use(logger());
apiApp.use(logger());
webApp.use(logger());

// Mount the apps. Start with the "/" route so it doesn't catch all routes.
mainApp.use(mount('/', webApp));
mainApp.use(mount('/api', apiApp));

startServer();

/**
 * Just an async function to enable "await" usage.
 */
async function startServer() {
  // Test database connection.
  console.log('Testing database connection...');
  try {
    await database.sequelize.authenticate();
  } catch (error) {
    console.error('Failed to connect to database:');
    console.error(error);
    process.exit(1);
  }

  // All good, ready to listen to incoming requests.
  mainApp.listen(PORT, () => console.log(`Server started, listening on port ${PORT}.`));
}
