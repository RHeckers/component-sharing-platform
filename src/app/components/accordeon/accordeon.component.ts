import { Component, OnInit, Input } from '@angular/core';
import {TweenMax} from "gsap/TweenMax";

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss']
})
export class AccordeonComponent implements OnInit {

  @Input() accordeonTitle: string;
  @Input() accordeonItem: Array<string>;
  @Input() index: number;
  activeSubCategoryIndex: number;


  constructor() { }

  ngOnInit() {
    this.activeSubCategoryIndex = 0;

  }

  showSubCategories(e){
    const height = this.accordeonItem.length * 25 + 30;
    const tweenSpeed = this.accordeonItem.length * 0.15;
    const clickedArrowId = e.target['attributes']['id']['value'];
    const length = clickedArrowId.length;
    const index = clickedArrowId.charAt(length - 1);
    this.activeSubCategoryIndex = index;

    const arrow = document.getElementById('arrow' + index)
    const subCategoriesToShow = document.getElementById('subCategories' + index);
    const displaySetting = getComputedStyle(subCategoriesToShow, null).display;

    if(displaySetting == 'block'){
      TweenMax.to(arrow, 0.45, {transform: 'rotate(180deg)'});
      TweenMax.to(subCategoriesToShow, tweenSpeed, {height: '0px', padding: '0', onComplete: function(){
        subCategoriesToShow.style.display = 'none';
      }});
    }else{
      subCategoriesToShow.style.display = 'block';
      TweenMax.to(arrow, 0.45, {transform: 'rotate(0deg)'});      
      TweenMax.to(subCategoriesToShow, tweenSpeed, {height: height, padding: '10px 0'});

    }
  }
 
}
