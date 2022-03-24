import { Query, Resolver } from '@nestjs/graphql';
import { EntryType } from './entry-type.entity';
import { EntryTypesService } from './entry-types.service';

@Resolver(() => EntryType)
export class EntryTypesResolver {
  constructor(private readonly entryTypesService: EntryTypesService) {}

  @Query(() => [EntryType], { name: 'entryTypes' })
  async findAll() {
    return await this.entryTypesService.findAll();
  }

  // @Mutation(() => EntryType)
  // createEntryType(
  //   @Args('createEntryTypeInput') createEntryTypeInput: CreateEntryTypeInput,
  // ) {
  //   return this.entryTypesService.create(createEntryTypeInput);
  // }

  // @Query(() => EntryType, { name: 'entryType' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.entryTypesService.findOne(id);
  // }

  // @Mutation(() => EntryType)
  // updateEntryType(
  //   @Args('updateEntryTypeInput') updateEntryTypeInput: UpdateEntryTypeInput,
  // ) {
  //   return this.entryTypesService.update(
  //     updateEntryTypeInput.id,
  //     updateEntryTypeInput,
  //   );
  // }

  // @Mutation(() => EntryType)
  // removeEntryType(@Args('id', { type: () => Int }) id: number) {
  //   return this.entryTypesService.remove(id);
  // }
}
