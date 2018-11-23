import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.scss']
})
export class SingleComponentComponent implements OnInit {

  names: Array<any>;
  code: Array<any>; 
  title: string;
  description: string;
  @Input() component: any;

  constructor() { }

  ngOnInit() {
    this.names = this.component.names;
    this.code = this.component.code;
    this.title = this.component.title;
    this.description = this.component.description;

    for(let i = 0; i < this.names.length; i++){
      let name = this.names[i];
      
      if(name.includes('.ts')){
        let name = this.names.splice(i, 1);
        let code = this.code.splice(i, 1);

        this.names.unshift(name);
        this.code.unshift(code);
      }
      if(name.includes('.css') || name.includes('.scss') || name.includes('.sass') || name.includes('.less')){
        let name = this.names.splice(i, 1);
        let code = this.code.splice(i, 1);
        this.names.push(name);
        this.code.push(code);
      }
    }    
  }  

  copyContent(e){

    const copyText = document.querySelector('.mat-tab-body-active').children[0].children[0] as any;

    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
}
 