import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../../models/component';

@Component({
  selector: 'app-upload-new-component',
  templateUrl: './upload-new-component.component.html',
  styleUrls: ['./upload-new-component.component.scss']
})
export class UploadNewComponentComponent implements OnInit {

  uploadedFiles: Array<any> = [];
  uploadedCode: Array<any> = [];
  addNewComponentInfo: HTMLElement;
  componentToAdd: Object = {} as ComponentModel;

  constructor() { }

  ngOnInit() {
    this.addNewComponentInfo = document.getElementById('addNewComponentInfo');
  }

  setTitleAndDescription(){
    this.addNewComponentInfo.style.display = 'block';
  }

  uploadFile(e){
    const files = e.target.files
    
    for(let i = 0; i < files.length; i++){
      const reader = new FileReader();
      let file = files[i];
      this.uploadedFiles.push(file.name);

      reader.onload = (e) => {
        let code = reader.result;
        this.uploadedCode.push(code);
      }
      
      reader.readAsText(file);
    }
  }

  submitNewComponent(title, description){
    this.componentToAdd['names'] = this.uploadedCode;
    this.componentToAdd['code'] = this.uploadedFiles;
    this.componentToAdd['title'] = title;
    this.componentToAdd['description'] = description;
    console.log(this.componentToAdd);


  }

}
 