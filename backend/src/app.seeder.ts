import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { CycleChunkSeeder } from './cycle-chunk/cycle-chunk.seeder';
import { CycleSeeder } from './cycle/cycle.seeder';
import { EntryTypeSeeder } from './entry-types/entry-type.seeder';

export class AppSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    return this.call(em, [CycleSeeder, CycleChunkSeeder, EntryTypeSeeder]);
  }
}
