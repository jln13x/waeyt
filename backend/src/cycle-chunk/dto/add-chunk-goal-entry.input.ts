import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddChunkGoalEntryInput {
  @Field()
  readonly cycleId!: string;

  @Field()
  readonly chunkNumber!: number;

  @Field()
  readonly entryTypeId!: number;

  @Field()
  readonly entryValue!: string;
}
