import { Factory, Faker } from '@mikro-orm/seeder';
import { EntryType } from './entry-type.entity';

export class EntryTypeFactory extends Factory<EntryType> {
  model = EntryType;

  protected definition(faker: Faker): Partial<EntryType> {
    return {};
  }
}
