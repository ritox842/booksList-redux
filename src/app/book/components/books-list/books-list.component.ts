import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Ibook} from '../../interfaces/book.interface';
import {Store} from '@ngrx/store';
import * as bookReducer from '../../reducers/book.reducer';
import {bookSelectors} from '../../reducers/book.reducer';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$: Observable<Ibook[]>;
  bookColorArray: string[] = ['A600A6', 'E40045', '530FAD', 'CCF600', 'D235D2', 'F13C73', '8243D6', 'DAFB3F',
    '0A67A3', '7277D8', '00B25C', '00733C', '218555', 'FF8E00', 'FFAA40', 'FFC173'];


  constructor(private store: Store<bookReducer.State>) {
    this.books$ = store.select(bookSelectors.selectAllBooks);

  }

  ngOnInit() {

  }

}
