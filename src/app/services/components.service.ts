import { Injectable } from '@angular/core';
import { ComponentModel } from '../models/component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private allComponents: Array<ComponentModel> = [];
  public updatedCollections = new Subject<Array<ComponentModel>>();
 
  constructor(private http: HttpClient) { }

  // Get the art collections from the backend
  getComponents(): void {
    // Make the API GET request
    this.http.get<Array<any>>('http://localhost:3000/api/components')
      .pipe(map((data) => {
        // Map the data to new objects where _id = id
        return data.map(component => {
          return {
            title: component.title,
            description: component.description,
            names: component.names,
            code: component.code,
            favorite: component.favorite,
            gitRepo: component.gitRepo,
            id: component._id
          };
        });
      }))
      .subscribe((componentsData) => {
        this.allComponents = componentsData.reverse();
        this.updatedCollections.next([...this.allComponents]);
      }, err => console.log(err));
  };

  // Add a component
  addComponent(component: ComponentModel): void {
    // Make the post request
    this.http.post<any>('http://localhost:3000/api/components/add', component)
    .subscribe((res) => {
      console.log(res)
      // Add the component to the uploaded components
      const newComponent: ComponentModel = {title: res.createdComponent.title, description: res.createdComponent.description, names: res.createdComponent.names, code: res.createdComponent.code, favorite: [], gitRepo: res.createdComponent.gitRepo, id: res.id}

      this.allComponents.unshift(newComponent);
      this.updatedCollections.next([...this.allComponents]);
    }, err => console.log(err));
  };
}
