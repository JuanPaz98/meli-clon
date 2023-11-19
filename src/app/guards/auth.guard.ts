import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const isLoged = sessionStorage.getItem('user');
        if (!isLoged) {
            this.router.navigate(['/login']);
            return false;
        };
        return true;
    }
}