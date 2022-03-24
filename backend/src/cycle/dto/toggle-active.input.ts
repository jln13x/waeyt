import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class ToggleActiveInput {
  @Field()
  @Type(() => Boolean)
  active!: boolean;
}
