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
    let subs = document.querySelectorAll('.subCategories');
    let height = this.accordeonItem.length * 25;
    let tweenSpeed = this.accordeonItem.length * 0.25;
    let arrow;

    for(let i = 0; i < subs.length; i++){
      let sub = subs[i] as HTMLElement;
      arrow = document.getElementById('arrow' + i)
      TweenMax.to(arrow, 0, {transform: 'rotate(0deg)'});
      sub.style.display = 'none';
      sub.style.height = '0';
    }

    const clickedArrowId = e.target['attributes']['id']['value'];
    const length = clickedArrowId.length;
    const index = clickedArrowId.charAt(length - 1);
    this.activeSubCategoryIndex = index;
    arrow = document.getElementById('arrow' + index)
    TweenMax.to(arrow, 0.5, {transform: 'rotate(180deg)'});
    const subCategoriesToShow = document.getElementById('subCategories' + index);
    subCategoriesToShow.style.display = 'block';
    TweenMax.to(subCategoriesToShow, tweenSpeed, {height: height + 'px'})
  }
 
}
