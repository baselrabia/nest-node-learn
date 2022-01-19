import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.22.1.30',
      port: 3306,
      username: 'root',
      password: 'ZdwYUqchpwOGOQ0J',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
