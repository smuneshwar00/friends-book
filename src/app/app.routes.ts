import { Routes } from '@angular/router';
import { RegistrationPageComponent } from './components/forms/registration-page/registration-page.component';
import { LoginPageComponent } from './components/forms/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './components/forms/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './components/forms/reset-password-page/reset-password-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' },
    {
        path: "register",
        component: RegistrationPageComponent
    },
    {
        path: "login",
        component: LoginPageComponent
    },
    {
        path: "forgot-password",
        component: ForgotPasswordPageComponent
    },
    {
        path: "reset-password",
        component: ResetPasswordPageComponent
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
