import { Component, OnInit } from '@angular/core';
import {TweenMax, Power4} from "gsap/TweenMax";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  sideMenu: HTMLElement;
  lastScrollPos: number;
  categories: Array<string>;

  constructor() { }

  ngOnInit() {
    //Temporary hardcoded categories array
    this.categories = ["Form Components", "Navigation components", "Layout component", "Buttons & Indicator components", "Popup components"];
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
