import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsDate, Length } from 'class-validator';
import { GraphQLDate } from 'graphql-scalars';

@InputType()
export class CreateCycleInput {
  @Field(() => GraphQLDate)
  // @IsDate()
  // @Type(() => Date)
  startDate!: Date;

  @Field(() => GraphQLDate)
  // @IsDate()
  // @Type(() => Date)
  endDate!: Date;

  @Field({ nullable: true })
  name?: string;
}
