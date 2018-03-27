import {Action} from '@ngrx/store';
import {Ibook} from '../interfaces/book.interface';

// Actions types
export enum BOOK_ACTIONS_TYPES {
  CREATE_ONE = '[Book] Create one',
  CREATE_MANY = '[Book] Create many',
  UPDATE_ONE = '[Book] Update one',
  DELETE_ONE = '[Book] Delete One'
}

// Define 'create one' action
export class CreateOne implements Action {
  readonly type = BOOK_ACTIONS_TYPES.CREATE_ONE;

  constructor(public book: Ibook) {
  }
}

// Define 'create many' action
export class CreateMany implements Action {
  readonly type = BOOK_ACTIONS_TYPES.CREATE_MANY;

  constructor(public books: Ibook[]) {
  }
}

// Define 'update one' action
export class UpdateOne implements Action {
  readonly type = BOOK_ACTIONS_TYPES.UPDATE_ONE;

  constructor(public ID: number,
              public changes: Partial<Ibook>) {
  }
}

// Define 'delete one' action
export class DeleteOne implements Action {
  readonly type = BOOK_ACTIONS_TYPES.DELETE_ONE;

  constructor(public ID: number) {
  }
}

export type BookActions
  = CreateOne |
  CreateMany |
  UpdateOne |
  DeleteOne;
