import {BOOK_GENRE} from '../enums/book-genre.enum';

export interface Ibook {
  id: number;
  name: string;
  author: string;
  genre: BOOK_GENRE;
  publishDate: number;
  summary: string;
  coverPicture: string;
}
