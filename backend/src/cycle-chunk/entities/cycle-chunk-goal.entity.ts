import {
  BaseEntity,
  DecimalType,
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { EntryType } from '../../entry-types/entry-type.entity';
import { CycleChunkGoalRepository } from '../repositories/cycle-chunk-goal.repository';
import { CycleChunk } from './cycle-chunk.entity';

@Entity({
  customRepository: () => CycleChunkGoalRepository,
})
export class CycleChunkGoal extends BaseEntity<CycleChunkGoal, 'id'> {
  @PrimaryKey()
  id!: number;

  @ManyToOne({
    nullable: false,
    entity: () => CycleChunk,
    wrappedReference: true,
  })
  cycleChunk!: IdentifiedReference<CycleChunk>;

  @ManyToOne({
    nullable: false,
    entity: () => EntryType,
    wrappedReference: true,
  })
  entryType!: IdentifiedReference<EntryType>;

  @Property({
    type: DecimalType,
  })
  value!: string;
}
