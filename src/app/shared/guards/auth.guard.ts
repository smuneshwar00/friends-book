import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const _authService = inject(AuthService);
  const _routerService = inject(Router);

  console.log( '_authService.isLoggedIn():- ' +_authService.isLoggedIn() )
  if (_authService.isLoggedIn()) {
    return true;
  } else {
    localStorage.removeItem('token');
    _routerService.navigate(['/login']);
    return false;
  }
};
