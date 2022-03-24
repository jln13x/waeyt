import Decimal from 'decimal.js';

export const DecimalTransformer = {
  from: (value: number | string) => {
    if (value) return new Decimal(value);
  },
  to: (value?: Decimal) => {
    if (value) return value.toFixed(2);
  },
};
