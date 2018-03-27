import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as bookReducer from '../../reducers/book.reducer';
import * as bookActions from '../../constants/book.actions';

import {Ibook} from '../../interfaces/book.interface';
import {demoBookData} from '../../../../assets/demo-book-data';

@Component({
  selector: 'app-upsert-book',
  templateUrl: './upsert-book.component.html',
  styleUrls: ['./upsert-book.component.css']
})
export class UpsertBookComponent implements OnInit {

  constructor(private bookStore: Store<bookReducer.State>) {
  }

  ngOnInit() {
    let t0 = performance.now();
    // demoBookData.forEach(book => this.createSingleBook(book));
    let t1 = performance.now();
    // console.log('Call to create single book took ' + (t1 - t0) + ' milliseconds.');

    t0 = performance.now();
    this.createMultipleBooks(demoBookData);
    t1 = performance.now();
    console.log('Call to create multiple books took ' + (t1 - t0) + ' milliseconds.');
  }

  /**
   * CreateOne new book in state.
   * @param book
   */
  createSingleBook(book: Ibook): void {
    this.bookStore.dispatch(new bookActions.CreateOne(book));
  }

  createMultipleBooks(books: Ibook[]): void {
    this.bookStore.dispatch(new bookActions.CreateMany(books));
  }
}
