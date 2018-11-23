import { Component, OnInit } from '@angular/core';
import {TweenMax} from "gsap/TweenMax";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  sideMenu: HTMLElement;
  lastScrollPos: number;
  categories: Array<object>;

  constructor() { }
 
  ngOnInit() { 
    //Temporary hardcoded categories array
    this.categories = [{
      index: "0",
      category: "Form Components",
      subCategories: ['Datepicker', 'Autocomplete', 'Checkbox', 'Multiple inputs', 'Inputs', 'Select']
    },
    {
      index: "1",
      category: "Navigation components",
      subCategories: ['test', 'test', 'test']
    },
    {
      index: "2",
      category: "Layout component",
      subCategories: ['test', 'test', 'test']
    },
    {
      index: "3",
      category: "Buttons & Indicator components", 
      subCategories: ['test', 'test', 'test']
    },
    {
      index: "4",
      category: "Popup components",
      subCategories: ['test', 'test', 'test']
    }
  ];

    window.addEventListener('scroll', this.scrollMode);
  }

  scrollMode(e){
    this.lastScrollPos = document.documentElement.scrollTop;
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      this.sideMenu = document.getElementById("sideMenu");
      TweenMax.to(this.sideMenu, 0.3, {top: "100px"})
    } else {
      TweenMax.to(this.sideMenu, 0.3, {top: "205px"})
    }  

  }

}
