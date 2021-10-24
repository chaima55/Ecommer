import { Component, OnInit } from '@angular/core';
import {Category} from '../../common/category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  productCategories: Category[] = [];

   constructor(private categoryService: CategoryService) { }

   ngOnInit(): void {
     this.categoryService.loadList().subscribe(
       data => {
         this.productCategories = data;
       }
     );
   }
}
