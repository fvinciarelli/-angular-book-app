import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './book/books-list/books-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: BooksListComponent},
  {path: "book", component: BookFormComponent},
  {path: "book/:id", component: BookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
