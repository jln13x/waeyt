import { CreateEntryTypeInput } from './create-entry-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEntryTypeInput extends PartialType(CreateEntryTypeInput) {
  @Field(() => Int)
  id!: number;
}
