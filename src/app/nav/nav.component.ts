import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

    // Constructor
    constructor() {
        this.getScreenSize();
    }
  scrHeight: any;
    scrWidth: any;
  size = true;

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          console.log(this.scrHeight, this.scrWidth);
          if (this.scrWidth === 800 || this.scrWidth === 600) {
            this.size = false;
            }
}
  showhide(){
    this.size = !this.size;
  }
}
