import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL = 'http://localhost:3001/'
  book:any
  bookMsg:any
  msgStatus:any
  constructor(private http:HttpClient) { }

  addBook(book:any){
    return this.http.post(this.URL+'book',book)
  }

  getBooks(){
    return this.http.get(this.URL+'book')
  }

  deleteBook(bookId:any){
    const options = {
      body:{
        id:bookId
      }
    }
    return this.http.delete(this.URL+'book',options)
  }

  updateBook(book:any,bookId:any){
    return this.http.put(this.URL+'book/'+bookId,book)
  }

  setBook(book:any){
    this.book = book
  }

  getBook(){
    return this.book
  }

  setBookMsg(msg:any,code:any){
    this.bookMsg = msg
    this.msgStatus = code
  }

  getBookMsg(){
    return {msg:this.bookMsg,msgStatus:this.msgStatus}
  }
}
