import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Cycle } from './cycle.entity';
import { CycleResolver } from './cycle.resolver';
import { CycleService } from './cycle.service';
import { GetCycleHandler } from './queries/get-cycle.handler';

const QueryHandler = [GetCycleHandler];

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Cycle],
    }),
  ],
  providers: [CycleService, CycleResolver, ...QueryHandler],
  exports: [CycleService],
})
export class CycleModule {}
