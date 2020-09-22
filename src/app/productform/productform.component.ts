import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
product;
  constructor(private service: DataService , private route: ActivatedRoute) {
 }
 ngOnInit(): void {
  }

  s(product) {
    console.log(product);
  }

  posted(data) {
    console.log(data);
    this.service.pos(data).subscribe(response => {
      console.log(response);
      data = response;
    });
  }

//   del(data) {
//     console.log(data);
//     this.service.del(data.title).subscribe(response => {
// console.log(response);
//     });
//   }
}
