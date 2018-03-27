import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BOOK_COMPONENTS} from './index';
import {BooksListComponent} from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...BOOK_COMPONENTS,
    BookComponent,
  ],
  entryComponents: [
    BooksListComponent
  ],
  exports: [
    BooksListComponent
  ]
})
export class BookModule {
}
