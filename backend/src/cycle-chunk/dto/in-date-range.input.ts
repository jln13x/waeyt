import { Field, InputType } from '@nestjs/graphql';
import { GraphQLDate } from 'graphql-scalars';

@InputType()
export class InDateRangeInput {
  @Field(() => GraphQLDate)
  startDate!: Date;

  @Field(() => GraphQLDate)
  endDate!: Date;
}
