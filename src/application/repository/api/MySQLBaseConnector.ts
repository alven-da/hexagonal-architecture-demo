import knex, { Knex } from 'knex';

const dbName = process.env.MYSQL_DB || 'hexagonal';
const dbHost = process.env.MYSQL_HOST || 'localhost';
const dbUser = process.env.MYSQL_USER || 'hexagonal_user';
const dbPassword = process.env.MYSQL_PASSWORD || 'password';

export class MySQLBaseConnector {
  private static _instance: MySQLBaseConnector;

  private connection: Knex;

  private constructor() {
    this.connection = knex({
      client: 'mysql2',
      connection: {
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        database: dbName
      },
      pool: { min: 0, max: 10 }
    });
  }

  public static getInstance(): MySQLBaseConnector {
    if (!MySQLBaseConnector._instance) {
      MySQLBaseConnector._instance = new MySQLBaseConnector();
    }

    return MySQLBaseConnector._instance;
  }

  public getConnection() {
    return this.connection;
  }
}
