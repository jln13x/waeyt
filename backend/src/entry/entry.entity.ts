import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import Decimal from 'decimal.js';
import { CycleChunk } from '../cycle-chunk/entities/cycle-chunk.entity';
import { EntryRepository } from './entry.repository';

@ObjectType()
@Entity({
  customRepository: () => EntryRepository,
})
export class Entry {
  @Field()
  @PrimaryKey()
  id!: string;

  @Field(() => Date)
  @Property()
  entryDate!: Date;

  @Field(() => String)
  weight!: Decimal;

  @Field(() => [CycleChunk])
  @ManyToOne({ nullable: false })
  cycleChunk!: CycleChunk;

  setCycleChunk(chunk: CycleChunk): this {
    this.cycleChunk = chunk;
    return this;
  }
}
