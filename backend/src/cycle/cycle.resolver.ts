import { wrap } from '@mikro-orm/core';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cycle } from './cycle.entity';
import { CycleService } from './cycle.service';
import { CreateCycleInput } from './dto/create-cycle.input';
import { ToggleActiveInput } from './dto/toggle-active.input';

@Resolver(() => Cycle)
export class CycleResolver {
  constructor(private readonly cycleService: CycleService) {}

  @Mutation(() => Cycle)
  async createCycle(@Args('createCycleInput') input: CreateCycleInput) {
    return await this.cycleService.create(input);
  }

  @Query(() => [Cycle], { name: 'cycles' })
  async findAll() {
    return await this.cycleService.findAll();
  }

  @Query(() => Cycle, { name: 'cycle' })
  async getCycle(@Args('id', { type: () => String }) cycleId: string) {
    return await this.cycleService.findById(cycleId);
  }

  @Query(() => Cycle, { name: 'activeCycle', nullable: true })
  async getActiveCycle(): Promise<Cycle | null> {
    return await this.cycleService.findActiveCycle();
  }

  @Mutation(() => Cycle)
  async toggleActiveCycle(
    @Args('id', { type: () => String }) cycleId: string,
    @Args('toggleActiveInput') input: ToggleActiveInput,
  ) {
    const cycle = await this.cycleService.findById(cycleId);

    return await this.cycleService.toggleActiveForCycle(cycle, input);
  }
}
