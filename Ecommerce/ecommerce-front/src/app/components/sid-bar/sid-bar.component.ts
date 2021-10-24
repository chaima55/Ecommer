import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sid-bar',
  templateUrl: './sid-bar.component.html',
  styleUrls: ['./sid-bar.component.css']
})
export class SidBarComponent {

  constructor(
    private router: Router
  ) { }


  navigateToProductsPage(): void {
    this.router.navigate(['products']);
  }

}
