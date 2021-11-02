import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-add-or-edit-author',
  templateUrl: './add-or-edit-author.component.html',
  styleUrls: ['./add-or-edit-author.component.css']
})
export class AddOrEditAuthorComponent implements OnInit {
  author:any;
  authorForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    yearOfBirth:new FormControl(''),
    yearOfDeath:new FormControl('')
  })

  constructor(private authorService:AuthorService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        if(params.method === 'edit'){
          this.author = this.authorService.getAuthor()
          this.authorForm.patchValue(this.author)
        }
      }
    )
  }
  
  onSubmit(){
    if(this.author){
      this.authorService.updateAuthor(this.authorForm.value,this.author._id).subscribe(
        (author)=>{
          this.authorService.setAuthMsg('Author updated Successfully','S')
          this.router.navigate(['author'])
        },(err)=>{
          this.authorService.setAuthMsg('Error updating Author','F')
        }
      )
    } else{
      this.authorService.addAuthor(this.authorForm.value).subscribe(
        (author)=>{
          this.authorService.setAuthMsg('Author added Successfully','S')
          this.router.navigate(['author'])
        },(err)=>{
          this.authorService.setAuthMsg('Error adding author','F')
        }
      )
    }
    
  }

  cancel(){
    this.authorService.setAuthMsg('','S')
    this.router.navigate(['author'])
  }

}
