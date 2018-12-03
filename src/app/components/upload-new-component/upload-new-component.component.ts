import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentModel } from '../../models/component';
import { ComponentsService } from 'src/app/services/components.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upload-new-component',
  templateUrl: './upload-new-component.component.html',
  styleUrls: ['./upload-new-component.component.scss']
})
export class UploadNewComponentComponent implements OnInit, OnDestroy {

  private authListenerSubscription: Subscription;
  private userSubscription: Subscription;

  userIsAuthenticated: boolean = false;
  uploadedFiles: Array<any> = [];
  uploadedCode: Array<any> = [];
  addNewComponentInfo: HTMLElement; 
  componentToAdd: Object = {} as ComponentModel;
  fileUpload: HTMLElement;
  autenticated: boolean = false; 
  creatorId: string;

  constructor( private componentServie: ComponentsService, private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
    this.fileUpload = document.getElementById('fileUpload');
    this.addNewComponentInfo = document.getElementById('addNewComponentInfo');

    this.authListenerSubscription = this.authService.getAuthStatusListener().subscribe(isAuth => {
      this.userIsAuthenticated = isAuth;
    });

    this.userSubscription = this.authService.getUser().subscribe(user => {
      if(user){
        this.creatorId = user._id; 
      }
    });
  }

  ngOnDestroy(){
    this.authListenerSubscription.unsubscribe();
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
 
  submitNewComponent(title, description, gitRepo){
    this.componentToAdd['names'] = this.uploadedFiles;
    this.componentToAdd['code'] = this.uploadedCode;
    this.componentToAdd['creatorId'] = this.creatorId;
    this.componentToAdd['title'] = title.value;
    this.componentToAdd['favorite'] = [];
    this.componentToAdd['description'] = description.value;
    this.componentToAdd['gitRepo'] = gitRepo.value;

    console.log(this.componentToAdd);
    // Send the newly created componented obj to the service, so It can be saved in the backend
    this.componentServie.addComponent(this.componentToAdd as ComponentModel)
    this.addNewComponentInfo.style.display = 'none';
    title.value = '';
    description.value = '';
  }

  signInOrUp(){
    this.router.navigate(['/login']);
  }
}
 