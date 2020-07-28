import { Options, Sequelize } from 'sequelize';
import configEnvs from './config/database';
import Place from './models/Place';

export interface ICustomDatabaseOptions extends Options {
  url?: string;
}

export type IDatabaseEnvironments = { [env: string]: ICustomDatabaseOptions };

const env = process.env.NODE_ENV || 'development';

const config = (configEnvs as IDatabaseEnvironments)[env];

let sequelize: Sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config);
}

export interface IDatabase {
  sequelize: Sequelize;
  Sequelize: Sequelize;
}

const database = {
  sequelize,
  Sequelize
};

// Init all models.
Place.initModel(sequelize);

export default database;
