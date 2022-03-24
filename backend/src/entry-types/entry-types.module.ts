import { Module } from '@nestjs/common';
import { EntryTypesService } from './entry-types.service';
import { EntryTypesResolver } from './entry-types.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { EntryType } from './entry-type.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { GetEntryTypeHandler } from './queries/get-entry-type.handler';

const QueryHandler = [GetEntryTypeHandler];

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [EntryType],
    }),
    CqrsModule,
  ],
  providers: [EntryTypesResolver, EntryTypesService, ...QueryHandler],
})
export class EntryTypesModule {}
