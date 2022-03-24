import {
  BaseEntity,
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EntryTypeRepository } from './entry-type.repository';

@ObjectType()
@Entity({
  customRepository: () => EntryTypeRepository,
})
export class EntryType extends BaseEntity<EntryType, 'id'> {
  @Field(() => Int)
  @PrimaryKey({ type: 'number' })
  id!: number;

  @Field(() => String)
  @Property()
  type!: string;

  @Field()
  @Property()
  createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  [EntityRepositoryType]?: EntryTypeRepository;
}
