import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import Decimal from 'decimal.js';

@ValidatorConstraint()
export class IsDecimalValidator implements ValidatorConstraintInterface {
  validate(value: any) {
    if (!Decimal.isDecimal(value)) return false;
    const decimal: Decimal = value;

    // Value has to be between 1 and 999
    if (decimal.greaterThanOrEqualTo(1) && decimal.lessThanOrEqualTo(999)) {
      return true;
    }
    return false;
  }

  defaultMessage() {
    // return 'Text ($value) is too short or too long!';
    return 'Decimal has to be between 1 and 999';
  }
}

export function IsDecimal(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsDecimal',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsDecimalValidator,
    });
  };
}
