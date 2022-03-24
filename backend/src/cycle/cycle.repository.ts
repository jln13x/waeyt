import { EntityRepository } from '@mikro-orm/core';
import { Cycle } from './cycle.entity';

export class CycleRepository extends EntityRepository<Cycle> {
  async findActiveCycle(): Promise<Cycle | null> {
    return await this.findOne({
      active: true,
    });
  }
}
