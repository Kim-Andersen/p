/**
 * The "module.exports" format is required for sequelize-cli to function.
 */
module.exports = {
  development: {
    url: 'postgresql://127.0.0.1:5432/p_development',
    dialect: 'postgres'
  },
  test: {
    url: 'postgresql://127.0.0.1:5432/p_test',
    dialect: 'postgres'
  },
  production: {
    dialect: 'postgres',
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: Number(process.env.RDS_PORT),
    database: process.env.RDS_DB_NAME
  }
};
