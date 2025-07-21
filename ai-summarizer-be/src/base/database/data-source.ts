import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
dotenv.config({
  path: [`.env.${process.env.NODE_ENV}`, '.env'],
});

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'ai_summarizer',
    entities: [__dirname + '/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    synchronize: false,
    cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/base/database/migrations',
    subscribersDir: 'subscriber',
},
}as DataSourceOptions);
