import { EntityRepository } from '@mikro-orm/knex';
import { EntryType } from './entry-type.entity';

export class EntryTypeRepository extends EntityRepository<EntryType> {}
