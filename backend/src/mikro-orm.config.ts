import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const logger = new Logger('MikroORM');
const mikroOrmConfig: Options = {
  type: 'postgresql',
  entitiesTs: ['src/**/*.entity.ts'],
  entities: ['dist/**/*.entity.js'],
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  dbName: 'waeyt',
  timezone: 'utc',
  forceUtcTimezone: true,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
  seeder: {
    defaultSeeder: 'AppSeeder',
    pathTs: 'src/**',
    glob: '*.seeder.{js,ts}',
    path: 'dist/**/*.seeder.js',
  },
};

export default mikroOrmConfig;
