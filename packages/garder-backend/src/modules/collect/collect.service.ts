import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IReportError } from 'garder-common';
import { Model } from 'mongoose';
import { Collect, CollectDocument } from './collect.schema';

@Injectable()
export class CollectService {
  constructor(
    @InjectModel(Collect.name) private collectModel: Model<CollectDocument>,
  ) {}

  test() {
    const test = new this.collectModel({
      col: 0,
      message: 'test',
      row: 1,
      stack: 'asd',
      timestamp: 123,
    });
    test.save();
    return 'collect service test';
  }

  async addErrorCollect(errorList: Array<IReportError>) {
    const result = await this.collectModel.insertMany(errorList);
    if (result) {
      return true;
    } else {
      // TODO ???为啥这个项目会被git ignore？
      return false;
    }
  }
}
