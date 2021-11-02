import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-or-edit-book',
  templateUrl: './add-or-edit-book.component.html',
  styleUrls: ['./add-or-edit-book.component.css']
})
export class AddOrEditBookComponent implements OnInit {
  books:any;
  book:any;
  bookForm = new FormGroup({
    title:new FormControl(''),
    author:new FormControl(''),
    summary:new FormControl(''),
    genre:new FormControl('')
  })

  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        if(params.method === 'edit'){
          this.book = this.bookService.getBook()
          this.bookForm.patchValue(this.book)
        }
      }
    )
    // this.getBooks()
  }


  onSubmit(){
    console.log(this.bookForm.value)
    if(this.book){
      this.bookService.updateBook(this.bookForm.value,this.book._id).subscribe(
        (book)=>{
          this.bookService.setBookMsg('Book updated successfully','S')
          this.router.navigate(['book'])
        },(err)=>{
          this.bookService.setBookMsg('Error updating Book','F')
        }
      )
    }else{
      this.bookService.addBook(this.bookForm.value).subscribe(
        (book)=>{
          this.bookService.setBookMsg('Book added successfully','S')
          this.router.navigate(['book'])
        },(err)=>{
          this.bookService.setBookMsg('Error adding book','F')
        }
      )
    }
  }


  cancel(){
    this.bookService.setBookMsg('','S')
    this.router.navigate(['book'])
  }
}
