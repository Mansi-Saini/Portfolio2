import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'intersection-observer';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  constructor(private router : Router){}


  home(){
    this.router.navigate([""]);
}

  about(){
    this.router.navigate(["about"]);
}

  container = true
  exit = false;

  ngOnDestroy(): void {
    this.exit = true;
    setTimeout(() => {
      // Code to be executed after the delay
      console.log('This code will be executed after a 2-second delay.');
    }, 5000);
  }

  // section fade functions starts
  // section fade functions starts
  @ViewChildren('dot1,dot2,dot3,dot4,dot5,dot6,dot7,dot8,dot9,dot10,dot11,dot12,dot13,dot14,dot15,dot16') observedElements!: QueryList<ElementRef>;


  fade1 = false;
fade2 = false;
fade3 = false;
fade4 = false;
fade5 = false;
fade6 = false;
fade7 = false;
fade8 = false;
fade9 = false;
fade10 = false;
fade11 = false;
fade12 = false;
fade13 = false;
fade14 = false;
fade15 = false;
fade16 = false;

// fadeOut1 = false;
// fadeOut2 = false;
// fadeOut3 = false;
// fadeOut4 = false;
// fadeOut5 = false;
// fadeOut6 = false;
// fadeOut7 = false;
// fadeOut8 = false;
// fadeOut9 = false;
// fadeOut10 = false;
// fadeOut11 = false;
// fadeOut12 = false;
// fadeOut13 = false;
// fadeOut14 = false;
// fadeOut15 = false;
// fadeOut16 = false;

  ngOnInit(){
    this.fadeFunction1();
    this.fadeFunction2();
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Check if elements are in the viewport on scroll and call the associated functions
    this.observedElements.forEach((elementRef) => {
      const element = elementRef.nativeElement;
      const functionName = element.getAttribute('data-function');
      const func = element.getAttribute('data-function1');

      if (functionName) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          this.callFunctionByName(functionName);
        } else {
          this.callFunctionByName(func);
        }
      }
    });
  }

  callFunctionByName(name: string) {
    switch (name) {
      case 'fadeFunction1':
        this.fadeFunction1();
        break;
      case 'fadeFunction2':
        this.fadeFunction2();
        break;
      case 'fadeFunction3':
        this.fadeFunction3();
        break;
      case 'fadeFunction4':
        this.fadeFunction4();
        break;
      case 'fadeFunction5':
        this.fadeFunction5();
        break;
      case 'fadeFunction6':
        this.fadeFunction6();
        break;
      case 'fadeFunction7':
        this.fadeFunction7();
        break;
      case 'fadeFunction8':
        this.fadeFunction8();
        break;
      case 'fadeFunction9':
        this.fadeFunction9();
        break;
      case 'fadeFunction10':
        this.fadeFunction10();
        break;
      case 'fadeFunction11':
        this.fadeFunction11();
        break;
      case 'fadeFunction12':
        this.fadeFunction12();
        break;
      case 'fadeFunction13':
        this.fadeFunction13();
        break;
      case 'fadeFunction14':
        this.fadeFunction14();
        break;
      case 'fadeFunction15':
        this.fadeFunction15();
        break;
      case 'fadeFunction16':
        this.fadeFunction16();
        break;
      // case 'fadeOutFunction1':
      //   this.fadeOutFunction1();
      //   break;
      // case 'fadeOutFunction2':
      //   this.fadeOutFunction2();
      //   break;
      // case 'fadeOutFunction3':
      //   this.fadeOutFunction3();
      //   break;
      // case 'fadeOutFunction4':
      //   this.fadeOutFunction4();
      //   break;
      // case 'fadeOutFunction5':
      //   this.fadeOutFunction5();
      //   break;
      // case 'fadeOutFunction6':
      //   this.fadeOutFunction6();
      //   break;
      // case 'fadeOutFunction7':
      //   this.fadeOutFunction7();
      //   break;
      // case 'fadeOutFunction8':
      //   this.fadeOutFunction8();
      //   break;
      // case 'fadeOutFunction9':
      //   this.fadeOutFunction9();
      //   break;
      // case 'fadeOutFunction10':
      //   this.fadeOutFunction10();
      //   break;
      // case 'fadeOutFunction11':
      //   this.fadeOutFunction11();
      //   break;
      // case 'fadeOutFunction12':
      //   this.fadeOutFunction12();
      //   break;
      // case 'fadeOutFunction13':
      //   this.fadeOutFunction13();
      //   break;
      // case 'fadeOutFunction14':
      //   this.fadeOutFunction14();
      //   break;
      // case 'fadeOutFunction15':
      //   this.fadeOutFunction15();
      //   break;
      // case 'fadeOutFunction16':
      //   this.fadeOutFunction16();
      //   break;
    }
  }

  fadeFunction1() {
    this.fade1 = true;
    // this.fadeOut1 = false;
  }

  fadeFunction2() {
    this.fade2 = true;
    // this.fadeOut2 = false;
  }

  fadeFunction3() {
    this.fade3 = true;
    // this.fadeOut3 = false;
  }

  fadeFunction4() {
    this.fade4 = true;
    // this.fadeOut4 = false;
  }

  fadeFunction5() {
    this.fade5 = true;
    // this.fadeOut5 = false;
  }

  fadeFunction6() {
    this.fade6 = true;
    // this.fadeOut6 = false;
  }

  fadeFunction7() {
    this.fade7 = true;
     //this.fadeOut7 = false;
  }

  fadeFunction8() {
    this.fade8 = true;
     //this.fadeOut8 = false;
  }

  fadeFunction9() {
    this.fade9 = true;
     //this.fadeOut9 = false;
  }

  fadeFunction10() {
    this.fade10 = true;
     //this.fadeOut10 = false;
  }
  
  fadeFunction11() {
    this.fade11 = true;
     //this.fadeOut11 = false;
  }
  
  fadeFunction12() {
    this.fade12 = true;
     //this.fadeOut12 = false;
  }
  
  fadeFunction13() {
    this.fade13 = true;
     //this.fadeOut13 = false;
  }
  
  fadeFunction14() {
    this.fade14 = true;
     //this.fadeOut14 = false;
  }
  
  fadeFunction15() {
    this.fade15 = true;
     //this.fadeOut15 = false;
  }
  
  fadeFunction16() {
    this.fade16 = true;
     //this.fadeOut16 = false;
  }


  // fadeOutFunction1() {
  //   this.fade1 = false;
  //   this.fadeOut1 = true;
  // }

  // fadeOutFunction2() {
  //   this.fade2 = false;
  //   this.fadeOut2 = true;
  // }

  // fadeOutFunction3() {
  //   this.fade3 = false;
  //   this.fadeOut3 = true;
  // }

  // fadeOutFunction4() {
  //   this.fade4 = false;
  //   this.fadeOut4 = true;
  // }

  // fadeOutFunction5() {
  //   this.fade5 = false;
  //   this.fadeOut5 = true;
  // }

  // fadeOutFunction6() {
  //   this.fade6 = false;
  //   this.fadeOut6 = true;
  // }

  // fadeOutFunction7() {
  //   this.fade7 = false;
  //   this.fadeOut7 = true;
  // }

  // fadeOutFunction8() {
  //   this.fade8 = false;
  //   this.fadeOut8  = true;
  // }

  // fadeOutFunction9() {
  //   this.fade9 = false;
  //   this.fadeOut9 = true;
  // }

  // fadeOutFunction10() {
  //   this.fade10 = false;
  //   this.fadeOut10 = true;
  // }
  
  // fadeOutFunction11() {
  //   this.fade11 = false;
  //   this.fadeOut11 = true;
  // }
  
  // fadeOutFunction12() {
  //   this.fade12 = false;
  //   this.fadeOut12 = true;
  // }
  
  // fadeOutFunction13() {
  //   this.fade13 = false;
  //   this.fadeOut13 = true;
  // }
  
  // fadeOutFunction14() {
  //   this.fade14 = false;
  //   this.fadeOut14 = true;
  // }
  
  // fadeOutFunction15() {
  //   this.fade15 = false;
  //   this.fadeOut15 = true;
  // }
  
  // fadeOutFunction16() {
  //   this.fade16 = false;
  //   this.fadeOut16 = true;
  // }

  // section fade functions ends
  // section fade functions ends
// ------------------------------------------------------------------------------------------------
// modal function starts
// modal function starts
@ViewChild('modalContent1') myModalContent1!: ElementRef;
@ViewChild('myModal1') myModal1!: ElementRef;
  modal1: boolean = true;

  open1() {
    this.modal1 = false;
    this.showSlides1(this.slideIndex1);
  }

  close1() {
    this.modal1 = true;
  }


  @ViewChild('modalContent2') myModalContent2!: ElementRef;
@ViewChild('myModal2') myModal2!: ElementRef;
  modal2: boolean = true;

  open2() {
    this.modal2 = false;
    this.showSlides2(this.slideIndex2);
  }

  close2() {
    this.modal2 = true;
  }

  @ViewChild('modalContent3') myModalContent3!: ElementRef;
@ViewChild('myModal3') myModal3!: ElementRef;
  modal3: boolean = true;

  open3() {
    this.modal3 = false;
    this.showSlides3(this.slideIndex3);
  }

  close3() {
    this.modal3 = true;
  }

  @ViewChild('modalContent4') myModalContent4!: ElementRef;
@ViewChild('myModal4') myModal4!: ElementRef;
  modal4: boolean = true;

  open4() {
    this.modal4 = false;
  }

  close4() {
    this.modal4 = true;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
 
    if (this.myModalContent1.nativeElement.contains(event.target)) {
      
    } else if (this.myModal1.nativeElement.contains(event.target)){
      this.close1()
    }

    if (this.myModalContent2.nativeElement.contains(event.target)) {
      
    } else if (this.myModal2.nativeElement.contains(event.target)){
      this.close2()
    }

    if (this.myModalContent3.nativeElement.contains(event.target)) {
      
    } else if (this.myModal3.nativeElement.contains(event.target)){
      this.close3()
    }

    if (this.myModalContent4.nativeElement.contains(event.target)) {
      
    } else if (this.myModal4.nativeElement.contains(event.target)){
      this.close4()
    }
  }

  // modal function ends
  // modal function ends
// -----------------------------------------------------------------------------------------------
  // slideShow functions starts
  // slideShow functions starts

  // slide show for project 1
slideIndex1 = 1;
 plusSlides1(n: number) {
  this.showSlides1(this.slideIndex1 += n);
}

 currentSlide1(n: number) {
  this.showSlides1(this.slideIndex1 = n);
}

showSlides1(n: number): void {
  let i: number;
  let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides1");
  let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("slideDot1");

  if (n > slides.length) {
    this.slideIndex1 = 1;
  }
  if (n < 1) {
    this.slideIndex1 = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  (slides[this.slideIndex1 - 1] as HTMLElement).style.display = "block";
  dots[this.slideIndex1 - 1].className += " active";
}


// slide show for project 2
slideIndex2 = 1;
 plusSlides2(n: number) {
  this.showSlides2(this.slideIndex2 += n);
}

 currentSlide2(n: number) {
  this.showSlides2(this.slideIndex2 = n);
}

showSlides2(n: number): void {
  let i: number;
  let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides2");
  let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("slideDot2");

  if (n > slides.length) {
    this.slideIndex2 = 1;
  }
  if (n < 1) {
    this.slideIndex2 = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  (slides[this.slideIndex2 - 1] as HTMLElement).style.display = "block";
  dots[this.slideIndex2 - 1].className += " active";
}

// slide show for project 3
slideIndex3 = 1;
 plusSlides3(n: number) {
  this.showSlides3(this.slideIndex3 += n);
}

 currentSlide3(n: number) {
  this.showSlides3(this.slideIndex3 = n);
}

showSlides3(n: number): void {
  let i: number;
  let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides3");
  let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("slideDot3");

  if (n > slides.length) {
    this.slideIndex3 = 1;
  }
  if (n < 1) {
    this.slideIndex3 = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  (slides[this.slideIndex3 - 1] as HTMLElement).style.display = "block";
  dots[this.slideIndex3 - 1].className += " active";
}
// slideShow functions ends
// slideShow functions ends

open15(){
  const externalURL = 'https://www.geeksforgeeks.org/how-to-set-x-axis-values-in-matplotlib-in-python/'; 
  window.open(externalURL, '_blank');
}

open16(){
  const externalURL = 'https://www.geeksforgeeks.org/python-program-to-convert-dict-of-list-to-csv/'; 
  window.open(externalURL, '_blank');
}

researchUrl: string = 'assets/pdf/research_paper.pdf';
research(){
    window.open(this.researchUrl, '_blank'); // '_blank' opens the link in a new tab
}

kyc(){
  const externalURL = 'https://github.com/Mansi-Saini/Know-your-comments'; 
  window.open(externalURL, '_blank');
}

hdp(){
  const externalURL = 'https://github.com/Mansi-Saini/Heart-Disease-Predictions-'; 
  window.open(externalURL, '_blank');
}

mrp(){
  const externalURL = 'https://github.com/Mansi-Saini/Movie-Rating-Prediction'; 
  window.open(externalURL, '_blank');
}


}


