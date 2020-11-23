import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entitys1/entitymodel';
import { ScontrolerService } from './s/scontroler/scontroler.service';
import { TypormcoController } from './co/typormco/typormco.controller';
import { pruduct } from './entity2/entitymodel';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'ys301987',
        database: 'typorm',
        logging:true,
        entities: [User,pruduct],
        synchronize: true,
      }
    ),
  ],
  controllers: [AppController, TypormcoController],
  providers: [AppService, ScontrolerService],
})
export class AppModule {}
