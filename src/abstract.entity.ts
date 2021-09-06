import { Transform } from 'class-transformer';
import { Id } from './valueobject/Id';
import { Generated, PrimaryColumn } from 'typeorm';

export class AbstractEntity {
  @Transform(({ value }: { value: Id }) => value?.toString(), {
    toPlainOnly: true,
  })
  @Transform(({ value }: { value: string }) => Id.from(value), {
    toClassOnly: true,
  })
  @PrimaryColumn('uuid', {
    transformer: {
      to(entityValue?: Id): string {
        return entityValue?.toString();
      },
      from(databaseValue: string): Id {
        return Id.from(databaseValue);
      },
    },
  })
  @Generated('uuid')
  id: Id;
}
