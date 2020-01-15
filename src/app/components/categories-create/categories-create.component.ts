import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interfaces/ICategory';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.scss']
})
export class CategoriesCreateComponent implements OnInit {

  public category: Partial<ICategory> = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public saveCategory() {

    this.http.post( environment.apiUrl + '/category', this.category )
    .subscribe(response => {
      this.router.navigate(["/categories"]);
    });

  }

}
