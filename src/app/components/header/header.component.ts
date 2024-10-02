import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { GuestViewComponent } from "../guest-view/guest-view.component";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'fb-header',
  standalone: true,
  imports: [GuestViewComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIn: boolean = false;

  _authService = inject(AuthService);
  _router = inject(Router);
  cdr= inject(ChangeDetectorRef);

  private routerSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkLocalStorage();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  checkLocalStorage(): void {
    this.isLoggedIn = !!localStorage.getItem('authToken');
    this.cdr.detectChanges(); // Ensure the view is updated
  }

  // ngOnInit(): void {
  //   this._authService.isLoggedIn().subscribe(status => {
  //     this.isLoggedIn = status;
  //   });
  // }

}
