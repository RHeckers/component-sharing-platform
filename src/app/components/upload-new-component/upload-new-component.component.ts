import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../../models/component';
import { ComponentsService } from 'src/app/services/components.service';

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
  fileUpload: HTMLElement;

  constructor( private componentServie: ComponentsService) { }
 
  ngOnInit() {
    this.fileUpload = document.getElementById('fileUpload');
    this.fileUpload.style.width = window.innerWidth * 0.8 * 0.3 + 'px'
    this.addNewComponentInfo = document.getElementById('addNewComponentInfo');
  }

  setTitleAndDescription(){
    this.uploadedFiles = [];
    this.uploadedCode = [];
    this.componentToAdd = {};
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
    this.componentToAdd['names'] = this.uploadedFiles;
    this.componentToAdd['code'] = this.uploadedCode;
    this.componentToAdd['title'] = title.value;
    this.componentToAdd['favorite'] = [];
    this.componentToAdd['description'] = description.value;

    //Send the newly created componented obj to the service, so It can be saved in the backend
    this.componentServie.addComponent(this.componentToAdd as ComponentModel)
    this.addNewComponentInfo.style.display = 'none';
    title.value = '';
    description.value = '';
  }

}
 