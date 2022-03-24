import { TransformFnParams, Transform } from 'class-transformer';
import Decimal from 'decimal.js';

export const TransformToDecimal = (): PropertyDecorator => {
  return Transform(toDecimalFn);
};

const toDecimalFn = ({ value }: TransformFnParams): Decimal => {
  if (!isNaN(value)) {
    return new Decimal(value);
  }

  throw Error('Value is not an number');
};
