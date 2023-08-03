import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  hidePassword: boolean = true;

  constructor(
    private authService: AuthService,
    private router:Router
    ) {}

  onSubmit(): void {
    const loggedIn = this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.router.navigate(['/new-product']);
    } else {
      alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
  }

  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}
