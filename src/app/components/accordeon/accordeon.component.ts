import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss']
})
export class AccordeonComponent implements OnInit {

  @Input() accordeonTitle: string;
  @Input() accordeonItem: Array<string>;

  constructor() { }

  ngOnInit() {
  }
 
}
