import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import Decimal from 'decimal.js';
import { IsDecimal } from '../../validation/is-decimal.validator';
import { TransformToDecimal } from '../../validation/to-decimal.transformer';

@InputType()
export class UpdateCycleChunkInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsDecimal()
  @TransformToDecimal()
  plannedWeight!: Decimal;
}
