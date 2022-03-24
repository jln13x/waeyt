import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Cycle } from '../cycle/cycle.entity';
import { CycleChunkFactory } from './cycle-chunk.factory';
dayjs.extend(utc);

export class CycleChunkSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const cycleRepository = em.getRepository<Cycle>(Cycle);
    const cycles = await cycleRepository.findAll({
      populate: ['cycleChunks'],
    });
    const factory = new CycleChunkFactory(em);

    cycles.forEach((cycle) => {
      factory.setCycle(cycle);

      const occupiedChunks: string[] = [];

      for (const chunk of cycle.cycleChunks) {
        occupiedChunks.push(chunk.startDate.toISOString());
      }

      const chunks = factory.make(cycle.getMaxPossibleChunks());

      for (const chunk of chunks) {
        const isoString = chunk.startDate.toISOString();
        if (!occupiedChunks.includes(isoString)) {
          occupiedChunks.push(chunk.startDate.toISOString());
          em.persist(chunk);
        } else {
          em.remove(chunk);
        }
      }
    });
    await em.flush();
  }
}
