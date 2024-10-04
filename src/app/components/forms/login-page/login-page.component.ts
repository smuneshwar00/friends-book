import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../shared/services/user-service.service';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../shared/model/user';
import { CommonModule } from '@angular/common';
import { EncryptService } from '../../../shared/services/encrypt.service';

@Component({
  selector: 'fb-login-page',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{

  _userService = inject(UserService)
  _authService = inject(AuthService)
  _router = inject(Router)
  _encryptService = inject(EncryptService)

  errorMessage: string | null = null;

  ngOnInit(): void {
    this._userService.loggedUser = null;
    localStorage.removeItem('token');
  }

  onSubmit(form: any): void {
    this.errorMessage = null;
    
    console.log('Form Data: ', form.value); //login logic to be put after working registration page is ready
    console.log('usename: ', form.value.username);

    this._userService.getUser(form.value.username).subscribe({
      next: (response) => {
        console.log('User fetch call successful', response);
        //newUser = response;
        console.log('is response null:- ', response.length===0)
        console.log('is null logged user before', this._userService.loggedUser===null)
        console.log(this._userService.loggedUser)

        if( response.length!==0 ){
          //this.loggedUser = response[0];
          console.log('response.password -> '+ response[0])
          
          if(this._authService.verifyPassword(form.value.password, response[0].password)){
            //store encoded data in local storage
            const { email, posts, friends } = response[0];
            console.log('what are we keeping in localstorage ', { email, posts, friends } )
            const encryptedDetails = this._encryptService.encrypt( { email, posts, friends } );
            this._authService.login(encryptedDetails); //hard-coded on purpose
            this._userService.loggedUser = response[0];
            this._router.navigate(['/home']);
          }else{
            this._userService.loggedUser = null;
            this.errorMessage = 'Incorrect Password!';
          }
          console.log('is null logged user post verify:- ', this._userService.loggedUser===null)
          console.log(this._userService.loggedUser)
        }else{
          this._userService.loggedUser = null;
          this.errorMessage = 'User with mail '+form.value.username+' not found in records!';
        }

        if(this._userService.loggedUser){
          console.log('Logged user has truthy value...')
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.errorMessage = error;
      }
    });
  }
}
