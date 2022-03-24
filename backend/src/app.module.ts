import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CycleChunkModule } from './cycle-chunk/cycle-chunk.module';
import { CycleModule } from './cycle/cycle.module';
import { DayModule } from './day/day.module';
import { DayResolver } from './day/day.resolver';
import { EntryModule } from './entry/entry.module';
import { EntryTypesModule } from './entry-types/entry-types.module';

const DatabaseModule = MikroOrmModule.forRoot(mikroOrmConfig);

const EventEmitter = EventEmitterModule.forRoot();

const GraphQL = GraphQLModule.forRoot({
  autoSchemaFile: join(process.cwd(), 'schema.gql'),
  playground: true,
  driver: ApolloDriver,
});

@Module({
  imports: [
    CycleModule,
    DatabaseModule,
    EntryModule,
    CycleChunkModule,
    EventEmitter,
    GraphQL,
    DayModule,
    EntryTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService, DayResolver],
})
export class AppModule {}
