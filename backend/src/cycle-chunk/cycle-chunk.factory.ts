import { Factory, Faker } from '@mikro-orm/seeder';
import { Cycle } from '../cycle/cycle.entity';
import { CycleChunk } from './entities/cycle-chunk.entity';
import Dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
Dayjs.extend(utc);
import { Reference } from '@mikro-orm/core';

export class CycleChunkFactory extends Factory<CycleChunk> {
  model = CycleChunk;

  private currentCycle?: Cycle;

  definition(faker: Faker): Partial<CycleChunk> {
    if (!this.currentCycle) {
      throw new Error('Factory requires a cycle');
    }

    const cycle = this.currentCycle;

    const maxChunks = cycle.getMaxPossibleChunks();
    const chunkNumber = faker.datatype.number(maxChunks);
    const cycleStartDate = Dayjs.utc(cycle.startDate);

    const chunkStart = cycleStartDate.add(
      chunkNumber * cycle.chunkLength,
      'day',
    );

    const chunkEnd = chunkStart.add(cycle.chunkLength - 1, 'day');

    return {
      cycle: Reference.create(cycle),
      startDate: chunkStart.toDate(),
      endDate: chunkEnd.toDate(),
    };
  }

  setCycle(cycle: Cycle) {
    this.currentCycle = cycle;
  }
}
