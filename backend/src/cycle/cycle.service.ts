import { EntityRepository } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Cycle } from './cycle.entity';
import { CycleRepository } from './cycle.repository';
import { CreateCycleInput } from './dto/create-cycle.input';
import { ToggleActiveInput } from './dto/toggle-active.input';

@Injectable()
export class CycleService {
  constructor(private readonly cycleRepository: CycleRepository) {}

  async create(input: CreateCycleInput): Promise<Cycle> {
    let { name } = input;
    // TODO Default name
    if (!name) {
      name = 'My cycle';
    }
    const cycle = this.cycleRepository.create({ name, ...input });

    const activeCycle = await this.findActiveCycle();

    if (!activeCycle) {
      cycle.assign({
        active: true,
      });
    }

    await this.cycleRepository.persistAndFlush(cycle);

    return cycle;
  }

  async findAll(): Promise<Cycle[]> {
    return await this.cycleRepository.findAll();
  }

  async findById(id: string): Promise<Cycle> {
    try {
      return await this.cycleRepository.findOneOrFail({
        id,
      });
    } catch (e) {
      throw new NotFoundException('Entity not found!');
    }
  }

  async findActiveCycle(): Promise<Cycle | null> {
    return await this.cycleRepository.findActiveCycle();
  }

  async toggleActiveForCycle(
    cycle: Cycle,
    input: ToggleActiveInput,
  ): Promise<Cycle> {
    const activeCycle = await this.findActiveCycle();

    if (activeCycle) {
      activeCycle.assign({
        active: false,
      });
    }

    cycle.assign({
      active: input.active,
    });

    this.cycleRepository.flush();

    return cycle;
  }
}
