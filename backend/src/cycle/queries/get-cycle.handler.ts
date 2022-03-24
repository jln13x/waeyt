import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Cycle } from '../cycle.entity';
import { CycleRepository } from '../cycle.repository';
import { GetCycleQuery } from './get-cycle.query';

@QueryHandler(GetCycleQuery)
export class GetCycleHandler implements IQueryHandler<GetCycleQuery> {
  constructor(private readonly cycleRepository: CycleRepository) {}
  async execute({ id }: GetCycleQuery): Promise<Cycle> {
    return await this.cycleRepository.findOneOrFail(
      { id },
      {
        populate: ['cycleChunks'],
      },
    );
  }
}
