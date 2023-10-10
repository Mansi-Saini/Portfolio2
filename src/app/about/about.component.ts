import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router : Router){}
  home(){
      this.router.navigate([""]);
  }
  work(){
      this.router.navigate(["work"]);
  }

  exit = false;
  cover(){
    this.exit = true;
  }

  Url: string = 'assets/pdf/resume.pdf';
  resume(){
    window.open(this.Url, '_blank'); // '_blank' opens the link in a new tab
  }
}
