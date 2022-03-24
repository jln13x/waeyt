import { Injectable } from '@nestjs/common';
import { CycleChunk } from '../cycle-chunk/entities/cycle-chunk.entity';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entry.entity';
import { EntryRepository } from './entry.repository';

@Injectable()
export class EntryService {
  constructor(private readonly entryRepository: EntryRepository) {}

  async create(input: CreateEntryInput, chunk: CycleChunk): Promise<Entry> {
    // const entry = this.entryRepository.create({});

    // Could be dangerous
    // entry.setCycleChunk(chunk);
    // await this.entryRepository.save(entry);
    // return entry;
    return new Entry();
  }

  async update(entry: Entry, input: UpdateEntryInput): Promise<Entry> {
    // await this.entryRepository.update(entry, input);
    // return await this.entryRepository.findOne(entry.id);
    return entry;
  }

  async remove(entry: Entry): Promise<void> {
    // await this.entryRepository.delete(entry);
  }

  async findAll(): Promise<Entry[]> {
    // return await this.entryRepository.find({});
    return [];
  }
}
