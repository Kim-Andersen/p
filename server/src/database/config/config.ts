import { Options } from 'sequelize';

export interface ICustomDatabaseOptions extends Options {
  url?: string;
}

const dialect = 'postgres';
const config: { [environment: string]: ICustomDatabaseOptions } = {
  development: {
    url: 'postgresql://127.0.0.1:5432/p_development',
    dialect
  },
  test: {
    url: 'postgresql://127.0.0.1:5432/p_test',
    dialect
  },
  production: {
    dialect,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: Number(process.env.RDS_PORT),
    database: process.env.RDS_DB_NAME
  }
};

export default config;
