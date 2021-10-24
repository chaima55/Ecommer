export class Client {
  id = 0;
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  phoneNumber = '';
  active = false;

  isValid(): boolean {
    if (this.firstName.length === 0) {
      return false;
    }
    if (this.lastName.length === 0) {
      return false;
    }
    if (this.email.length === 0) {
      return false;
    }
    if (this.password.length === 0) {
      return false;
    }
    if (this.phoneNumber.length === 0) {
      return false;
    }
    return true;
  }
}
