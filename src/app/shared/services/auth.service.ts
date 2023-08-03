import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  constructor() { }
  login(username: string, password: string): boolean {
    // Aquí puedes implementar la lógica real de autenticación con una API o base de datos
    // Por ahora, simplemente comprobaremos que el usuario y la contraseña sean "admin"
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
