import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private router : Router){}

  cover = true;
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.exit = true;
        this.cover = false;
      }
    });
  }

  linkedin(){
    const externalURL = 'https://www.linkedin.com/in/mansi-saini06/'; 
  window.open(externalURL, '_blank');
  }

  github(){
    const externalURL = 'https://github.com/Mansi-Saini'; 
  window.open(externalURL, '_blank');
  }

  mail(){
    const recipientEmail = 'sainimansi759@gmail.com';

  const mailtoLink = `mailto:${recipientEmail}`;

  window.open(mailtoLink, '_blank');
  }

  about(){
    this.exit = true;
    this.content = false;
    setTimeout(() => {
      // Code to be executed after the delay
      this.router.navigate(["about"]);
      console.log('This code will be executed after a 2-second delay.');
    }, 2000);
    
  }

  work(){
    this.exit = true;
    this.content = false;
    setTimeout(() => {
      // Code to be executed after the delay
      this.router.navigate(["work"]);
      console.log('This code will be executed after a 2-second delay.');
    }, 2000);
    
  }

  content = true
  exit = false;

  ngOnDestroy(): void {
    this.exit = true;
    setTimeout(() => {
      // Code to be executed after the delay
      console.log('This code will be executed after a 2-second delay.');
    }, 5000);
  }

  p1 = false;
  p2 = false;
  p3 = false;

  fade1(){
    this.p1 = true
  }
  
  fadeout1(){
    this.p1 = false
  }
  fade2(){
    this.p2 = true
  }
  
  fadeout2(){
    this.p2 = false;
    
  }
  fade3(){
    this.p3 = true
    
  }
  
  fadeout3(){
    this.p3 = false;

  }

  
}
