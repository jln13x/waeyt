import { Cycle } from '../cycle.entity';

export class CycleCreatedEvent {
  constructor(private readonly cycle: Cycle) {}

  getCycle(): Cycle {
    return this.cycle;
  }
}

export const CycleCreatedEventIdentifier = 'cycle-created';
