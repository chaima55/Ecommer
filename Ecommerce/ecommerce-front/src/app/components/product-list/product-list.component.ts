import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/product';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number  = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  thePreviousKeyword: string | null = '';
   theKeyword: string | null ='';

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() : void{
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts() {
    this.searchMode =  this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode){
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }
  handleSearchProducts(){
    this.theKeyword  = this.route.snapshot.paramMap.get('keyword');

    if (this.thePreviousKeyword != this.theKeyword){
      this.thePageNumber = 1;
    }
    this.thePreviousKeyword = this.theKeyword;
    this.productService.searchProductsPaginate(
      this.thePageNumber - 1,
      this.thePageSize,
      this.theKeyword).subscribe(res => {
      this.products = res.content;
      this.thePageNumber = res.number + 1;
      this.thePageSize = res.size;
      this.theTotalElements = res.totalElements;
    });
  }

  handleListProducts(){
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId  = Number(this.route.snapshot.paramMap.get('id'));
    }else {
      this.currentCategoryId = 1;
    }
    if (this.previousCategoryId != this.currentCategoryId){
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;
    this.productService.getProductListPaginate(
      this.thePageNumber - 1,
      this.thePageSize,
      this.currentCategoryId).subscribe(res => {
      this.products = res.content;
      this.thePageNumber = res.number + 1;
      this.thePageSize = res.size;
      this.theTotalElements = res.totalElements;
    });
  }

  addToCard(product: Product): void {
    this.sharedService.sendProduct(product);
  }
}
