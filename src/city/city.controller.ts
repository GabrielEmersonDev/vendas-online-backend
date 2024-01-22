import { Controller, Get, Post, Put, Patch, Body } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  async getAllCitiesByStateId(): Promise<CityEntity[]> {
    return this.cityService.getAllCitiesByStateId(4);
  }
}
