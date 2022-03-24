import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { EntryType } from './entry-type.entity';

export class EntryTypeSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const predefinedEntryTypes = ['weight', 'steps', 'calories'];

    for (const type of predefinedEntryTypes) {
      const entryType = em.assign(new EntryType(), {
        type,
      });


      await em.persistAndFlush(entryType);
    }
  }
}
