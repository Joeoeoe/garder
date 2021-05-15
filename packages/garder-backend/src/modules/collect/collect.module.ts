import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectController } from './collect.controller';
import { Collect, CollectSchema } from './collect.schema';
import { CollectService } from './collect.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Collect.name, schema: CollectSchema }]),
  ],
  controllers: [CollectController],
  providers: [CollectService],
})
export class CollectModule {}
