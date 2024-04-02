import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BooksListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BookModule { }
