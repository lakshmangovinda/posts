import { Component, OnInit } from '@angular/core';
import { PostingService } from '../posting.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(public serve: PostingService) {}
  ngOnInit(){
    this.serve.get().subscribe(res => { console.log(res); });
  }
}
