import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'hexagonal';

export class MongoDBBaseConnector {
  private static _instance: MongoDBBaseConnector;
  private _client: MongoClient;
  private _db: Db;

  private constructor() {
    this._client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 5000,
      family: 4
    });
  }

  static async getInstance() {
    if (!MongoDBBaseConnector._instance) {
      MongoDBBaseConnector._instance = new MongoDBBaseConnector();
      await MongoDBBaseConnector._instance.connect();
    }

    return MongoDBBaseConnector._instance;
  }

  private async connect(): Promise<void> {
    try {
      await this._client.connect();
      this._db = this._client.db(dbName);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Failed to connect to MongoDB', err);
    }
  }

  public getDB(): Db {
    return this._db;
  }
}
