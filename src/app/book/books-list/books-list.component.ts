import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe( data => this.books = data );
  }

  deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId);
  }

}
