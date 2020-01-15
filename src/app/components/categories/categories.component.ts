import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ICategory } from 'src/app/interfaces/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: Partial<ICategory> = {};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.getCategories();

  }

  public getCategories() {
    this.http.get(environment.apiUrl + '/category')
    .subscribe(response => {
      this.categories = response;
      console.log(response);
    });
  }

}
