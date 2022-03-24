import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { CycleChunk } from '../cycle-chunk/entities/cycle-chunk.entity';

@ObjectType()
@Entity()
export class ChunkDay {
  @Field()
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  id!: string;

  @ManyToOne({ nullable: false, entity: () => CycleChunk })
  cycleChunk!: CycleChunk;

  @Property()
  date!: Date;
}
