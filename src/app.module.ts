import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import morgan = require('morgan');
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${__dirname}/database/banco.sqlite`,
      entities: [`${__dirname}/**/**/*.entity{.ts,.js}`],
      namingStrategy: new SnakeNamingStrategy(),
      migrationsRun: true,
      migrations: [`${__dirname}/database/migration/*{.ts,.js}`],
      extra: {
        ssl: process.env.DB_SSL || false,
      },
    }),
    FuncionarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(morgan('tiny')).forRoutes('/');
  }
}
