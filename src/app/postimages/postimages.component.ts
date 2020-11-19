import { Component, OnInit } from '@angular/core';
import { PostingService } from '../posting.service';

@Component({
  selector: 'app-postimages',
  templateUrl: './postimages.component.html',
  styleUrls: ['./postimages.component.css']
})
export class PostimagesComponent{

  constructor(public serve: PostingService) { }
  selectedFile: File;
  // tslint:disable-next-line: member-ordering
  fileupload: any;
  imageurl: any;

 onUpload() {
  const url = {
     data: `${this.imageurl}`
   };
  this.serve.post(url).subscribe( res => {console.log(res); } );
  }

  imagepreview(file) {
    this.fileupload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageurl = event.target.result;
    };
    reader.readAsDataURL(this.fileupload);
  }
 
  }


