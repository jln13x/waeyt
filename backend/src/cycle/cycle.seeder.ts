import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { CycleFactory } from './cycle.factory';

export class CycleSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    new CycleFactory(em).create(20);
  }
}
