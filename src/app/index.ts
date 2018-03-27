import {BookModule} from './book/book.module';
import {ActionReducerMap} from '@ngrx/store';
import {bookReducer} from './book/reducers/book.reducer';

export const APP_COMPONENTS = [];
export const APP_PROVIDERS = [];
export const FEATURE_MODULES = [
  BookModule
];

export const REDUCERS: ActionReducerMap<any> = {
  books: bookReducer
};

