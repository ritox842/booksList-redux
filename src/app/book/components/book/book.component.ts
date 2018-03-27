import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Ibook} from '../../interfaces/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @HostBinding('style.flexBasis') flexBasis = Math.floor(Math.random() * (40)) + 30 + '%';

  @Input() book: Ibook;

  @Input()
  set bookColorArray(bookColorArray: string[]) {
    this.bookBackgroundColor = bookColorArray[Math.floor(Math.random() * bookColorArray.length)];
  }

  bookBackgroundColor: string;

  constructor() {
  }

  ngOnInit() {
  }

  edit(): void {

  }

  remove(): void {

  }

}
