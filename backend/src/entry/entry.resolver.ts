import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { isWithinInterval } from 'date-fns';
import { CycleService } from '../cycle/cycle.service';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entry.entity';
import { EntryService } from './entry.service';

@Resolver(() => Entry)
export class EntryResolver {
  constructor(
    private readonly entryService: EntryService,
    private readonly cycleService: CycleService,
  ) {}

  @Query(() => Entry, { name: 'entry' })
  getEntry(@Args('id', { type: () => String }) entry: Entry) {
    return entry;
  }

  @Mutation(() => Entry)
  async createEntry(@Args('createEntryInput') input: CreateEntryInput) {
    const cycle = await this.cycleService.findById(input.cycleId);

    if (!cycle) {
      throw new NotFoundException('Entity not found!');
    }

    const { entryDate } = input;

    const isInRange = isWithinInterval(entryDate, {
      start: cycle.startDate,
      end: cycle.endDate,
    });

    // TODO Validation Message
    if (!isInRange) throw new BadRequestException('Entry date is out of Range');

    const chunk = await cycle.getChunkForDate(input.entryDate);
    // const entries = await chunk.getEntries();

    // Either throw or maybe just update the existing entry
    // entries.forEach((entry) => {
    //   if (isSameDay(entryDate, entry.entryDate)) {
    //     throw new BadRequestException('Date already has an entry');
    //   }
    // });

    // We assume that the appropriate chunk exists
    // return await this.entryService.create(input, chunk);
  }

  @Mutation(() => String, {
    description: 'Returns the id of the deleted entity',
  })
  async deleteEntry(@Args('id', { type: () => String }) entry: Entry) {
    await this.entryService.remove(entry);

    return entry.id;
  }

  @Query(() => [Entry], { name: 'entries' })
  async getEntries() {
    return await this.entryService.findAll();
  }

  @Mutation(() => Entry)
  async updateEntry(
    @Args('id', { type: () => String }) entry: Entry,
    @Args('updateEntryInput') input: UpdateEntryInput,
  ) {
    return this.entryService.update(entry, input);
  }
}
