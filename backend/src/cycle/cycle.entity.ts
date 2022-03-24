import {
  BaseEntity,
  Collection,
  DateType,
  Entity,
  OneToMany,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLInt } from 'graphql';
import { GraphQLDate } from 'graphql-scalars';
import { CycleChunk } from '../cycle-chunk/entities/cycle-chunk.entity';
import { CycleRepository } from './cycle.repository';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

@ObjectType()
@Entity({
  customRepository: () => CycleRepository,
})
export class Cycle extends BaseEntity<Cycle, 'id'> {
  @Field()
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  readonly id!: string;

  @Field()
  @Property()
  name!: string;

  @Field(() => GraphQLDate)
  @Property({ type: DateType })
  startDate!: Date;

  @Field(() => GraphQLDate)
  @Property({ type: DateType })
  endDate!: Date;

  @Field(() => [CycleChunk])
  @OneToMany(() => CycleChunk, 'cycle', {
    orphanRemoval: true,
  })
  readonly cycleChunks = new Collection<CycleChunk>(this);

  @Field(() => Boolean)
  @Property({ type: 'boolean' })
  active = false;

  @Field()
  @Property()
  createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field(() => GraphQLInt)
  @Property({ type: 'int', default: 7 })
  chunkLength = 7;

  getFrom(): Date {
    return this.startDate;
  }

  isActive(): boolean {
    return this.active;
  }

  async getChunkForDate(date: Date): Promise<CycleChunk | undefined> {
    // const cycleChunks = await this.getCycleChunks();

    return undefined;
    // return cycleChunks
    //   .toArray()
    //   .find((chunk) =>
    //     isWithinInterval(date, { start: chunk.startDate, end: chunk.endDate }),
    //   );
  }

  getMaxPossibleChunks() {
    const startDate = dayjs.utc(this.startDate);
    const endDate = dayjs.utc(this.endDate);
    const dayDifference = endDate.diff(startDate, 'days') + 1;

    // Not 0
    if (dayDifference % this.chunkLength) {
      throw Error('Invalid configured cycle');
    }

    return dayDifference / this.chunkLength;
  }

  getChunkDateRangeByNumber(chunkNumber: number): {
    startDate: Dayjs;
    endDate: Dayjs;
  } {
    if (chunkNumber < 1) {
      throw new Error('Chunk number must be greater than 0');
    }

    const daysAfter = (chunkNumber - 1) * this.chunkLength;
    const cycleStartDate = dayjs.utc(this.startDate);
    const cycleEndDate = dayjs.utc(this.endDate);

    if (daysAfter === 0) {
      return {
        startDate: cycleStartDate,
        endDate: cycleStartDate.add(this.chunkLength - 1, 'day'),
      };
    }

    const chunkStartDate = cycleStartDate.add(daysAfter, 'days');
    const chunkEndDate = cycleStartDate.add(this.chunkLength - 1, 'days');

    if (chunkEndDate.isAfter(cycleEndDate)) {
      throw new Error('Chunk number out of bounds');
    }

    return {
      startDate: chunkStartDate,
      endDate: chunkEndDate,
    };
  }

  getChunkByChunkNumber(chunkNumber: number) {
    const { startDate, endDate } = this.getChunkDateRangeByNumber(chunkNumber);

    console.log({
      startDate,
      endDate,
    });

    return this.cycleChunks.getItems().find((chunk) => {
      dayjs.utc(chunk.startDate).isSame(startDate) &&
        dayjs.utc(chunk.endDate).isSame(endDate);
    });
  }

  [OptionalProps]?: 'updatedAt' | 'createdAt' | 'active' | 'chunkLength';
}
