import { FindOneOptions } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import Decimal from 'decimal.js';
import { Cycle } from '../cycle/cycle.entity';
import { GetCycleQuery } from '../cycle/queries/get-cycle.query';
import { EntryType } from '../entry-types/entry-type.entity';
import { GetEntryTypeQuery } from '../entry-types/queries/get-entry-type.query';
import { CycleChunk } from './entities/cycle-chunk.entity';
import { CycleChunkRepository } from './repositories/cycle-chunk.repository';
import { AddChunkGoalEntryInput } from './dto/add-chunk-goal-entry.input';
import { InDateRangeInput } from './dto/in-date-range.input';
import { UpdateCycleChunkInput } from './dto/update-cycle-chunk.input';
import { CycleChunkGoalRepository } from './repositories/cycle-chunk-goal.repository';

@Injectable()
export class CycleChunkService {
  constructor(
    private readonly cycleChunkRepository: CycleChunkRepository,
    private readonly cycleChunkGoalRepository: CycleChunkGoalRepository,
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async update(
    chunk: CycleChunk,
    input: UpdateCycleChunkInput,
  ): Promise<CycleChunk> {
    // chunk.assign(input);
    await this.cycleChunkRepository.flush();
    return chunk;
  }

  async compare(base: CycleChunk, previous: CycleChunk): Promise<Decimal> {
    // const baseAvg = await base.getAverageWeight();
    // const previousAvg = await previous.getAverageWeight();

    // return baseAvg.sub(previousAvg);
    return await new Decimal(2);
  }

  async findAll(): Promise<CycleChunk[]> {
    return await this.cycleChunkRepository.findAll();
  }

  async findById<T extends string>(
    id: number,
    options?: FindOneOptions<CycleChunk, T>,
  ): Promise<CycleChunk> {
    return await this.cycleChunkRepository.findOneOrFail<T>(
      {
        id,
      },
      {
        ...options,
      },
    );
  }

  async findInDateRange(
    cycleId: string,
    input: InDateRangeInput,
  ): Promise<CycleChunk | null> {
    return await this.cycleChunkRepository.findInRangeOfCycle(cycleId, input);
  }

  async addChunkGoalEntry(input: AddChunkGoalEntryInput): Promise<CycleChunk> {
    const { cycleId, chunkNumber, entryValue } = input;

    const entryType = await this.queryBus.execute<
      GetEntryTypeQuery,
      EntryType | null
    >(new GetEntryTypeQuery(input.entryTypeId));

    const cycle = await this.queryBus.execute<GetCycleQuery, Cycle>(
      new GetCycleQuery(cycleId),
    );

    let chunk = cycle.getChunkByChunkNumber(chunkNumber);

    if (!chunk) {
      const { startDate, endDate } =
        cycle.getChunkDateRangeByNumber(chunkNumber);

      chunk = this.cycleChunkRepository.create({
        cycle,
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
      });

      this.cycleChunkRepository.persist(chunk);
    }

    const cycleChunkGoal = this.cycleChunkGoalRepository.create({
      cycleChunk: chunk,
      entryType,
      value: entryValue,
    });

    this.cycleChunkGoalRepository.persist(cycleChunkGoal);

    await this.cycleChunkRepository.flush();

    return chunk;
  }
}
