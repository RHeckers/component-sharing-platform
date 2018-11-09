import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

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

  constructor(private componentServie: ComponentsService) { 
    this.componentServie.updatedCollections.subscribe(val => this.components = [...val])
    console.log(this.components.length)
  }

  ngOnInit() {

    this.pageTitle = 'Explore, upload and download Angular Components'
    this.fileInput = document.getElementById('fileInput');
    
  }

  

}
