import { Migration } from '@mikro-orm/migrations';

export class Migration20220308044822 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "entry_type" ("id" serial primary key, "type" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "entry_type" cascade;');
  }
}
