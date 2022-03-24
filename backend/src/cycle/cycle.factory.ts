import { Factory, Faker } from '@mikro-orm/seeder';
import { addWeeks } from 'date-fns';
import { Cycle } from './cycle.entity';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export class CycleFactory extends Factory<Cycle> {
  model = Cycle;

  definition(faker: Faker): Partial<Cycle> {
    const initialDate = dayjs.utc(new Date());

    const startDate = faker.datatype.boolean()
      ? initialDate.add(faker.datatype.number(150), 'week')
      : initialDate.subtract(faker.datatype.number(150), 'week');

    const endDate = startDate
      .add(faker.datatype.number(150), 'week')
      .subtract(1, 'day');

    return {
      name: faker.commerce
        .productName()
        .slice(0, faker.datatype.number({ min: 3, max: 30 })),
      startDate: startDate.toDate(),
      endDate: endDate.toDate(),
    };
  }
}
