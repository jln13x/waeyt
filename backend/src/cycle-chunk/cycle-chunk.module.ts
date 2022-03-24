import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CycleChunkResolver } from './cycle-chunk.resolver';
import { CycleChunkService } from './cycle-chunk.service';
import { CycleChunkGoal } from './entities/cycle-chunk-goal.entity';
import { CycleChunk } from './entities/cycle-chunk.entity';
import { CycleCreatedListener } from './listener/cycle-created.listener';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [CycleChunk, CycleChunkGoal],
    }),
    CqrsModule,
  ],
  providers: [CycleChunkService, CycleCreatedListener, CycleChunkResolver],
})
export class CycleChunkModule {}
