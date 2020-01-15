import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interfaces/ICategory';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent implements OnInit {

  public category: Partial<ICategory> = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public saveCategory() {

    this.http.put( environment.apiUrl + '/category' + this.category._id, this.category )
    .subscribe(response => {
      this.router.navigate(["/categories"]);
    });

  }

}
