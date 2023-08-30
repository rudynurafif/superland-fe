import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) => {
  const router = inject(Router)
  if (sessionStorage.getItem('token')) {
    return true
  } else {
    return false
  }
};
