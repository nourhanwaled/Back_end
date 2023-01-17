import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Nour@waled11',
  database: 'first_task',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
 //synchronize: true,
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  // synchronize: true,
  // CLI: {
  //   migrationsDir: 'src/migrations',
  // },
};

const datasource = new DataSource(typeOrmConfig); // config is one that is defined in datasource.config.ts file
datasource.initialize();
export default datasource;
