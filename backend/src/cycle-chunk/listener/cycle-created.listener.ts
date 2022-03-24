import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { add, isAfter, isEqual } from 'date-fns';
import {
  CycleCreatedEventIdentifier,
  CycleCreatedEvent,
} from '../../cycle/events/cycle-created.event';
import { CycleChunk } from '../entities/cycle-chunk.entity';

@Injectable()
export class CycleCreatedListener {
  @OnEvent(CycleCreatedEventIdentifier)
  handlePeriodCreatedEvent(event: CycleCreatedEvent) {
    const cycle = event.getCycle();
    const cycleStartDate = cycle.startDate;
    const cycleEndDate = cycle.endDate;

    const generateChunksRecursively = async (
      startDate: Date,
    ): Promise<void> => {
      if (
        isEqual(startDate, cycleEndDate) ||
        isAfter(startDate, cycleEndDate)
      ) {
        return;
      }

      let endDate = add(startDate, { days: 6 });

      if (isAfter(endDate, cycleEndDate)) {
        endDate = cycleEndDate;
      }

      // const cycleChunk = new CycleChunk(cycle, startDate, endDate);
      // await this.repository.save(cycleChunk);

      return generateChunksRecursively(add(endDate, { days: 1 }));
    };

    generateChunksRecursively(cycleStartDate);
  }
}
