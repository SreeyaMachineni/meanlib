import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';
import { AddOrEditBookComponent } from './components/add-or-edit-book/add-or-edit-book.component';
import { AddOrEditAuthorComponent } from './components/add-or-edit-author/add-or-edit-author.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'book',component:BookComponent},
  {path:'author',component:AuthorComponent},
  {path:'addBook',component:AddOrEditBookComponent},
  {path:'addAuthor',component:AddOrEditAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
