import { Injectable } from '@nestjs/common';
import { EntryTypeRepository } from './entry-type.repository';

@Injectable()
export class EntryTypesService {
  constructor(private readonly entryTypeRepository: EntryTypeRepository) {}

  async findAll() {
    return await this.entryTypeRepository.findAll();
  }

  // create(createEntryTypeInput: CreateEntryTypeInput) {
  //   return 'This action adds a new entryType';
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} entryType`;
  // }

  // update(id: number, updateEntryTypeInput: UpdateEntryTypeInput) {
  //   return `This action updates a #${id} entryType`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} entryType`;
  // }
}
