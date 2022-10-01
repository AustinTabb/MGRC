import { Module } from '@nestjs/common';
import { RawgService } from './rawg.service';
import { Axios } from 'axios';

@Module({
  providers: [RawgService, Axios],
})
export class RawgModule {
  constructor(private axios: Axios) {}
}
