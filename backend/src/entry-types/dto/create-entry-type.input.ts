import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEntryTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField!: number;
}
