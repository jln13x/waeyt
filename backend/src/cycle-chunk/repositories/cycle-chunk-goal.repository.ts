import { EntityRepository } from '@mikro-orm/knex';
import { CycleChunkGoal } from '../entities/cycle-chunk-goal.entity';

export class CycleChunkGoalRepository extends EntityRepository<CycleChunkGoal> {}
