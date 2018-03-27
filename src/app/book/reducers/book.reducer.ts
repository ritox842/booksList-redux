import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Ibook} from '../interfaces/book.interface';
import {BOOK_ACTIONS_TYPES, BookActions} from '../constants/book.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';


// Entity adapter.
export const bookAdapter = createEntityAdapter<Ibook>();

// State
export interface State extends EntityState<Ibook> {
}

// Set adapter selectors
const booksAdapterSelectors = bookAdapter.getSelectors();

// Selectors
export const getBooksState = createFeatureSelector<any>('books');

export const bookSelectors: any = {
  selectBooksIds: createSelector(getBooksState, booksAdapterSelectors.selectIds),
  selectBooksEntities: createSelector(getBooksState, booksAdapterSelectors.selectEntities),
  selectAllBooks: createSelector(getBooksState, booksAdapterSelectors.selectAll),
  booksCount: createSelector(getBooksState, booksAdapterSelectors.selectTotal),
};

// Default book state
const defaultBook = {
  ids: [],
  entities: {}
};

// Define initial state in adapter.
export const initialState: State = bookAdapter.getInitialState(defaultBook);

// Reducer
export function bookReducer(state: State = initialState,
                            action: BookActions) {
  switch (action.type) {
    case BOOK_ACTIONS_TYPES.CREATE_ONE:
      return bookAdapter.addOne(action['book'], state);

    case BOOK_ACTIONS_TYPES.CREATE_MANY:
      return bookAdapter.addMany(action['books'], state);

    case BOOK_ACTIONS_TYPES.UPDATE_ONE:
      return bookAdapter.updateOne({
        id: action['ID'],
        changes: action['changes'],
      }, state);

    case BOOK_ACTIONS_TYPES.DELETE_ONE:
      return bookAdapter.removeOne(action['ID'], state);

    default:
      return state;

  }

}
