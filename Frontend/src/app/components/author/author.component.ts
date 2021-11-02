import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors:any;
  authMsg:any;
  msgCode:any
  constructor(private authorService:AuthorService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.getAuthors()
    const msg = this.authorService.getAuthMsg()
    this.authMsg = msg.msg
    this.msgCode = msg.msgStatus
  }
  getAuthors(){
    this.authorService.getAuthors().subscribe(
      (authors)=>{
        this.authors = authors
      },(err)=>{
        console.log(err,'error')
      }
    )
  }

  deleteAuthor(author:any){
    this.authorService.deleteAuthor(author._id).subscribe(
      (author)=>{
        this.authMsg = 'Author delete success'
        this.msgCode = 'S'
        this.getAuthors()
      },(err)=>{
        this.authMsg = 'Error deleting Author'
        this.msgCode = 'F'
      }
    )
  }

  editAuthor(author:any){
    this.authorService.setAuthor(author)
    this.router.navigate(['addAuthor',{method:'edit'}])
  }

}
