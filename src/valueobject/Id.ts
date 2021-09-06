import { v4 as uuid } from 'uuid';

export class Id {
  private constructor(private _id: string) {}

  static generate(): Id {
    return new Id(uuid());
  }

  static from(id: string) {
    return new Id(id);
  }

  toString(): string {
    return this._id;
  }

  equals(otherId: Id): boolean {
    return this._id === otherId._id;
  }
}
