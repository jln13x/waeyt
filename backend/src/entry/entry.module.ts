import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CycleModule } from '../cycle/cycle.module';
import { Entry } from './entry.entity';
import { EntryResolver } from './entry.resolver';
import { EntryService } from './entry.service';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Entry],
    }),
    CycleModule,
  ],
  providers: [EntryService, EntryResolver],
})
export class EntryModule {}
