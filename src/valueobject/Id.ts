import { v4 as uuid } from 'uuid';

export class Id {
  private constructor(private _id: string) {}

  static generate(): Id {
    return new Id(uuid());
  }

  static from(id: string) {
    return new Id(id);
  }

  get id(): string {
    return this._id;
  }

  equals(id: Id): boolean {
    return this.id === id.id;
  }
}
