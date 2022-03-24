import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';
import Decimal from 'decimal.js';
import { IsDecimal } from '../../validation/is-decimal.validator';
import { TransformToDecimal } from '../../validation/to-decimal.transformer';

@InputType()
export class CreateEntryInput {
  @Field()
  @IsDate()
  @Type(() => Date)
  entryDate!: Date;

  @Field(() => String)
  @IsNotEmpty()
  @TransformToDecimal()
  @IsDecimal()
  weight!: Decimal;

  @Field()
  @IsNotEmpty()
  cycleId!: string;
}
