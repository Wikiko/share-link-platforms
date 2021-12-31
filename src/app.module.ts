import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import morgan = require('morgan');
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ContatoModule } from './contato/contato.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ClienteModule } from './cliente/cliente.module';
import { ObraModule } from './obra/obra.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${__dirname}/database/banco.sqlite`,
      entities: [`${__dirname}/**/**/*.entity{.ts,.js}`],
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: false,
      migrationsRun: true,
      migrations: [`${__dirname}/database/migration/*{.ts,.js}`],
      extra: {
        ssl: process.env.DB_SSL || false,
      },
      // logging: 'all',
    }),
    FuncionarioModule,
    ContatoModule,
    EnderecoModule,
    ClienteModule,
    ObraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(morgan('dev')).forRoutes('/');
  }
}
