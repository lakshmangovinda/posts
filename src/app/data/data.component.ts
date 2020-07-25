import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent{

  constructor(public service: DataService) { }
  datas: any[];
  load(){
// @ts-ignore
    this.service.getposts().subscribe(res => this.datas = res);
  }

  posted(data){
    console.log(data.value);
    // const post = {name: data.value};
    // console.log(post);
    this.service.pos(data).subscribe(response => {
data = response;
console.log(response);
this.datas.splice(0, 0, data);

    });
  }
}
