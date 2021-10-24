import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalLoginComponent} from '../modal-login/modal-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterContentChecked {

  totalPrice: number = 0;
  nbShop: number = 0;

  constructor(
    private sharedService: SharedService,
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router,
  ) {
  }

  ngAfterContentChecked() {
    this.totalPrice = this.sharedService.priceVal;
    this.nbShop = this.sharedService.numberProducts;
  }

  navigateToCardPage(): void {
    this.router.navigate(['card']);

  }

  isLogin(): boolean {
    return this.authService.getUserId() === null;
  }

  loginHandler(): void {
    this.modalService.open(ModalLoginComponent, {centered: true});
  }

  logoutHandler(): void {
    this.authService.logout();
  }
}
