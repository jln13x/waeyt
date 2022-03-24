import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { EntryType } from '../entry-type.entity';
import { EntryTypeRepository } from '../entry-type.repository';
import { GetEntryTypeQuery } from './get-entry-type.query';

@QueryHandler(GetEntryTypeQuery)
export class GetEntryTypeHandler implements IQueryHandler<GetEntryTypeQuery> {
  constructor(private readonly entryTypeRepository: EntryTypeRepository) {}
  async execute({ id }: GetEntryTypeQuery): Promise<EntryType | null> {
    return await this.entryTypeRepository.findOneOrFail({ id });
  }
}
