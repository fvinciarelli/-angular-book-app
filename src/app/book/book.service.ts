import { Injectable } from '@angular/core';
import { Book } from './model/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = "http://localhost:3001";

  constructor(private http: HttpClient) {
  }

  addBook(book: Book): Observable<void> {
    return this.http.post<void>(this.apiUrl, book);
  }

  editBook(book: Book): Observable<void> {
    return this.http.put<void>(this.apiUrl, book);
  }

  deleteBook(bookId: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + "/" + id);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + "/books");
  }
}
