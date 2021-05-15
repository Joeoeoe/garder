import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectModule } from './modules/collect/collect.module';

@Module({
  imports: [
    CollectModule,
    MongooseModule.forRoot('mongodb://localhost/garder'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
