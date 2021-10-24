import {Component, OnInit} from '@angular/core';
import {Client} from '../../common/client';
import {AuthService} from '../../services/auth.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.css']
})
export class ModalSignUpComponent implements OnInit {

  user: Client = new Client();
  showErrorMessage = false;

  constructor(
    private authService: AuthService,
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.authService.signup(this.user).subscribe(
      res => {
        this.showErrorMessage = false;
        this.activeModal.dismiss('Cross click');
      }, error => {
        this.showErrorMessage = true;
      }
    );
  }
}
