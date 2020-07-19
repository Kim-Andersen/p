import { Sequelize } from 'sequelize';
import configEnvs from './config/config';

const env = process.env.NODE_ENV || 'development';
const config = configEnvs[env];

console.log('env', env);

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

database.sequelize = sequelize;
database.Sequelize = Sequelize;

export default database;
