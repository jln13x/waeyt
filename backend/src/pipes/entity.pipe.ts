import { EntityManager, EntityRepository } from '@mikro-orm/knex';
import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class EntityPipe implements PipeTransform {
  constructor(private readonly entityManager: EntityManager) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (!metatype) throw Error('No type for the parameter specified');

    const repository =
      this.entityManager.getRepository<EntityRepository<unknown>>(metatype);

    let entity = null;

    try {
      // entity = await repository.findOneOrFail({ id: value });
    } catch (e) {
      entity = null;
    }

    if (!entity) {
      throw new NotFoundException('Entity not found!');
    }
    return entity;
  }
}
