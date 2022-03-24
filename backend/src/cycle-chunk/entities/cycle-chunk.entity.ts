import {
  BaseEntity,
  Collection,
  DateType,
  Entity,
  IdentifiedReference,
  ManyToOne,
  OneToMany,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLDate } from 'graphql-scalars';
import { Cycle } from '../../cycle/cycle.entity';
import { ChunkDay } from '../../day/chunk-day.entity';
import { CycleChunkRepository } from '../repositories/cycle-chunk.repository';
import { CycleChunkGoal } from './cycle-chunk-goal.entity';

@ObjectType()
@Entity({
  customRepository: () => CycleChunkRepository,
})
export class CycleChunk extends BaseEntity<CycleChunk, 'id'> {
  @Field()
  @PrimaryKey()
  readonly id!: number;

  @Field()
  @Property()
  createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field(() => GraphQLDate)
  @Property({ type: DateType })
  startDate!: Date;

  @Field(() => GraphQLDate)
  @Property({ type: DateType })
  endDate!: Date;

  @Field(() => [ChunkDay])
  @OneToMany(() => ChunkDay, 'cycleChunk', {
    orphanRemoval: true,
  })
  chunkDays = new Collection<ChunkDay>(this);

  @Field(() => [ChunkDay])
  @OneToMany(() => CycleChunkGoal, 'cycleChunk')
  goalEntries = new Collection<CycleChunkGoal>(this);

  @Field(() => Cycle)
  @ManyToOne({ nullable: false, entity: () => Cycle, wrappedReference: true })
  cycle!: IdentifiedReference<Cycle>;

  [OptionalProps]?: 'updatedAt' | 'createdAt';
}
