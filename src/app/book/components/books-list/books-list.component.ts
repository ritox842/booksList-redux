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

  constructor(private store: Store<bookReducer.State>) {
    this.books$ = store.select(bookSelectors.selectAllBooks);

  }

  ngOnInit() {
    this.books$.subscribe(res => {
      debugger;
    });
  }

}
