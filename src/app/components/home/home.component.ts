import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  components: Array<object> = [];
  fileInput: HTMLElement;
  uploadedFile: File;
  pageTitle: string;

  constructor(private componentServie: ComponentsService, private authService: AuthService) { 
    this.componentServie.updatedCollections.subscribe(val => {
      console.log(val)
      this.components = [...val]
    }); 
    this.authService.getUser().subscribe(user => console.log(user))
    
  }

  ngOnInit() {
    this.authService.getTokenStatus();
    this.componentServie.getComponents();
    this.pageTitle = 'Explore, upload and download Angular Components'
    this.fileInput = document.getElementById('fileInput');
    
  }

  

}
