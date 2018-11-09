import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-new-component',
  templateUrl: './upload-new-component.component.html',
  styleUrls: ['./upload-new-component.component.scss']
})
export class UploadNewComponentComponent implements OnInit {

  uploadedFiles: Array<any> = [];
  addNewComponentInfo: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.addNewComponentInfo = document.getElementById('addNewComponentInfo');
  }

  uploadFile(e){
    const files = e.target.files
    
    for(let i = 0; i < files.length; i++){
      const reader = new FileReader();

      let file = files[i];

      this.uploadedFiles.push(file.name)

      console.log(this.uploadedFiles);
      reader.onload = function(e) {
        let text = reader.result;
        console.log(text);
      }
      
      reader.readAsText(file);

    }
  }

  setTitleAndDescription(){
    this.addNewComponentInfo.style.display = 'block';

  }

}
 