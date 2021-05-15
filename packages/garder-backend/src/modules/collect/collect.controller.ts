import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollectService } from './collect.service';
import { CollectErrorDto } from './dto/collect-error.dto';

@Controller('collect')
export class CollectController {
  constructor(private collectService: CollectService) {}
  @Get('test')
  test() {
    return this.collectService.test();
  }
  @Post()
  async collect(@Body() collectErrorDto: CollectErrorDto) {
    const data = collectErrorDto.data;
    const result = await this.collectService.addErrorCollect(data);
    return result;
  }
}
