import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  components: Array<object>;
  fileInput: HTMLElement;
  uploadedFile: File;
  pageTitle: string;

  constructor() { }

  ngOnInit() {
    this.components = [{
      names: ["app.component.ts", "app.component.html", "app.component.sccs"],
      code: ["test code text one", "test code test two"]      
    }, 
    {
      names: ["app2.component.ts", "app2.component.html"],
      code: ["test2 code text one", "test2 code test two"] 
    }]

    this.pageTitle = 'Explore, upload and download Angular Components'
    this.fileInput = document.getElementById('fileInput');
    
  }

  uploadFile(e){
    console.log(e.target.files[0]);
    let files = e.target.files
    const reader = new FileReader();

    reader.onload = function(e) {
      let text = reader.result;
      console.log(text);
    }
    
    reader.readAsText(files[0]);
    
    
  }

}
