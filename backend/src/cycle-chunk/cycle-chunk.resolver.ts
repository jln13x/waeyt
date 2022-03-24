import { QueryBus } from '@nestjs/cqrs';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import Decimal from 'decimal.js';
import { Cycle } from '../cycle/cycle.entity';
import { CycleChunk } from './entities/cycle-chunk.entity';
import { CycleChunkService } from './cycle-chunk.service';
import { AddChunkGoalEntryInput } from './dto/add-chunk-goal-entry.input';
import { InDateRangeInput } from './dto/in-date-range.input';
import { UpdateCycleChunkInput } from './dto/update-cycle-chunk.input';

@Resolver(() => CycleChunk)
export class CycleChunkResolver {
  constructor(private readonly cycleChunkService: CycleChunkService) {}

  // @Mutation(() => CycleChunk, { name: 'updateCycleChunk' })
  async update(@Args('updateCycleChunkInput') input: UpdateCycleChunkInput) {
    // const chunk = await this.cycleChunkService.findById(chunkId);
    // return await this.cycleChunkService.update(chunk, input);
    return;
  }

  @Query(() => [CycleChunk], { name: 'cycleChunksForCycle' })
  async findAllCycleChunksForCycle(
    @Args('id', { type: () => String })
    cycle: Cycle,
  ) {
    return cycle.cycleChunks;
  }

  @Query(() => CycleChunk, { name: 'cycleChunk' })
  async findOne(@Args('id', { type: () => String }) chunk: CycleChunk) {
    return chunk;
  }

  @Query(() => CycleChunk, { name: 'cycleChunkInDateRange', nullable: true })
  async getCycleChunkInDateRange(
    @Args('cycleId', { type: () => String }) cycleId: string,
    @Args('inDateRangeInput') input: InDateRangeInput,
  ) {
    return await this.cycleChunkService.findInDateRange(cycleId, input);
  }

  @Mutation(() => CycleChunk, { name: 'addCycleChunkGoalEntry' })
  async addChunkGoalEntry(
    @Args('addChunkGoalEntryInput')
    input: AddChunkGoalEntryInput,
  ) {
    return await this.cycleChunkService.addChunkGoalEntry(input);
  }

  @ResolveField(() => String, { name: 'averageWeight' })
  async getAverageWeight(@Parent() chunk: CycleChunk): Promise<Decimal> {
    // return await chunk.getAverageWeight();
    return await new Decimal(2);
  }

  @ResolveField(() => String, {
    name: 'compareWithPrevious',
    description: 'Returns the weight difference compared to the previous chunk',
  })
  async compareWithPrevious(@Parent() chunk: CycleChunk): Promise<Decimal> {
    // const previous = await chunk.getPreviousChunk();
    // return await this.cycleChunkService.compare(chunk, previous);
    return new Decimal(2);
  }
}
