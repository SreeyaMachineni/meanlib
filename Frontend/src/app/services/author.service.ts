import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  URL = 'http://localhost:3001/'
  author:any
  authMsg:any
  msgStatus:any
  constructor(private http:HttpClient) { }

  addAuthor(author:any){
    return this.http.post(this.URL+'author',author)
  }

  getAuthors(){
    return this.http.get(this.URL+'author')
  }

  deleteAuthor(authorId:any){
    const options = {
      body:{
        id:authorId
      }
    }
    return this.http.delete(this.URL+'author',options)
  }

  updateAuthor(author:any,authorId:any){
    return this.http.put(this.URL+'author/'+authorId,author)
  }
  
  setAuthor(author:any){
    this.author = author
  }

  getAuthor(){
    return this.author
  }

  setAuthMsg(msg:any,code:any){
    this.authMsg = msg
    this.msgStatus = code
  }

  getAuthMsg(){
    return {msg:this.authMsg,msgStatus:this.msgStatus}
  }
}
