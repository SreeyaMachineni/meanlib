import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:any;
  bookMsg:any;
  msgCode:any;
  constructor(private bookService:BookService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBooks()
    const msg = this.bookService.getBookMsg()
    this.bookMsg = msg.msg
    this.msgCode = msg.msgStatus
  }

  getBooks(){
    this.bookService.getBooks().subscribe(
      (books)=>{
        this.books = books
      },(err)=>{
        console.log(err,'error')
      }
    )
  }

  deleteBook(book:any){
    this.bookService.deleteBook(book._id).subscribe(
      (author)=>{
        this.bookMsg = 'Book delete success'
        this.msgCode = 'S'
        this.getBooks()
      },(err)=>{
        this.bookMsg = 'Error deleting Book'
        this.msgCode = 'F'
      }
    )
  }


  editBook(book:any){
    this.bookService.setBook(book)
    this.router.navigate(['addBook',{method:'edit'}])
  }





}
