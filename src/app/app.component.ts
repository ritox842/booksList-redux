import { Component } from '@angular/core';
import {demoBookData} from '../assets/demo-book-data';
import * as bookActions from './book/constants/book.actions';
import {Store} from '@ngrx/store';
import * as bookReducer from './book/reducers/book.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private bookStore: Store<bookReducer.State>) {
    this.bookStore.dispatch(new bookActions.CreateMany(demoBookData));
  }
}
