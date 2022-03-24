import { EntityRepository } from '@mikro-orm/knex';
import { Entry } from './entry.entity';

export class EntryRepository extends EntityRepository<Entry> {
  getFoo() {
    return true;
  }
}
