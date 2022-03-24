import { EntityRepository } from '@mikro-orm/knex';
import { CycleChunk } from '../entities/cycle-chunk.entity';
import { InDateRangeInput } from '../dto/in-date-range.input';

export class CycleChunkRepository extends EntityRepository<CycleChunk> {
  async findInRangeOfCycle(
    cycleId: string,
    input: InDateRangeInput,
  ): Promise<CycleChunk | null> {
    const qb = this.qb('chunk')
      .leftJoinAndSelect('chunk.cycle', 'cycle')
      .where({
        cycle: cycleId,
      })
      .andWhere({
        startDate: input.startDate,
      })
      .andWhere({
        endDate: input.endDate,
      });

    return await qb.getSingleResult();
  }

}
