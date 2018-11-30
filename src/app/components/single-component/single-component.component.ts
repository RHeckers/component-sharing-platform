import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.scss']
})
export class SingleComponentComponent implements OnInit, AfterContentInit {

  fileNames: Array<any>;
  gitRepo: string;
  names: Array<any>;
  code: Array<any>; 
  tabscards: NodeList
  title: string;
  description: string;
  @Input() component: any;

  constructor() { }

  ngOnInit() {
    //Assign values
    this.tabscards = document.querySelectorAll('.mat-tab-body-content');
    this.fileNames = this.component.names;
    this.names = [];
    this.code = this.component.code;
    this.title = this.component.title;
    this.description = this.component.description;
    this.gitRepo = this.component.gitRepo;

    //Sort the files, so the TS files show first and the css files show last
    this.sortFilesInput();    
  }  

  
  ngAfterContentInit(){
    //Function to change the material tab styling, so no scroll bar shows. 
    //Could not find no other way >>>, /deep/, ::ng-depp are deprecated and no replacement.
    this.changeMaterialTabStyling();
  }

  openInStackblitz(stackblitzURL){
    let stackBlitzGitURL = stackblitzURL.split('github.com/')[1];
    sdk.openGithubProject(stackBlitzGitURL);
    
    //Code to embed the project with StackBlitz instead off opening it in a new window
    // sdk.embedGithubProject(
    //   'Elm or div id',
    //   stackBlitzGitURL,
    //   { height: 500, view: 'preview' }
    // );
  }

  //Sort the files, so the TS files show first and the css files show last
  sortFilesInput(){
      let tsArr = []
      let tsArrCode = []
      let htmlArr = []
      let htmlArrCode = []
      let cssArr = []
      let cssArrCode = []
      for(let i = 0; i < this.fileNames.length; i++){
        let name = this.fileNames[i]; 
        
        if(name.includes('.ts')){
          tsArr.push(name);
          tsArrCode.push(this.code[i]);
        }        
        if(name.includes('.html')){
          htmlArr.push(name)
          htmlArrCode.push(this.code[i]);
        }        
        if(name.includes('.css') || name.includes('.scss') || name.includes('.sass') || name.includes('.less')){
           cssArr.push(name);
           cssArrCode.push(this.code[i]);
        }

        if(i == this.fileNames.length - 1){
          this.names = [...tsArr, ...htmlArr, ...cssArr];
          this.code = [...tsArrCode, ...htmlArrCode, ...cssArrCode];
        }
      }  

  }

  //Function to change the material tab styling, so no scroll bar shows. 
  //Could not find no other way >>>, /deep/, ::ng-depp are deprecated and no replacement.
  changeMaterialTabStyling(){
    for(let i = 0; i < this.tabscards.length; i++){
      let tabcard = this.tabscards[i] as HTMLElement;
      tabcard.style.overflow = "hidden";
    }

  }

  //Use the copy icon to copy the content of a tab to the clipboard. 
  copyContent(e){
    const copyText = document.querySelector('.mat-tab-body-active').children[0].children[0] as any;

    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
}
 