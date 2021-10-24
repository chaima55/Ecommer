import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../services/auth.service';
import {ModalSignUpComponent} from '../modal-sign-up/modal-sign-up.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {


  email: string = '';
  password: string = '';
  showErrorMessage = false;

  constructor(
    public activeModal: NgbActiveModal,
    public authService: AuthService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {

  }

  validate(): boolean {
    return !(this.email.length === 0 || this.password.length === 0);
  }

  connect(): void {
    this.authService.login(this.email, this.password).subscribe(
      res => {
        this.showErrorMessage = false;
        this.authService.saveAuthData(res.jwt, res.id, res.role);
        this.activeModal.dismiss('Cross click');
      }, error => {
        this.showErrorMessage = true;
      }
    );
  }

  openSignUp(): void {
    this.activeModal.dismiss('Cross click');
    this.modalService.open(ModalSignUpComponent, {centered: true});
  }
}
