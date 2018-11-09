import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.scss']
})
export class SingleComponentComponent implements OnInit {

  @Input() names: Array<any>;
  @Input() code: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.code)
    
  }

}
 