import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../shared/model/user';
//import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../../../shared/services/user-service.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'fb-registration-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent implements OnInit{

  registrationForm!: FormGroup;// Using the definite assignment assertion operator

  _userService = inject(UserService);
  _authService = inject(AuthService);
  _router = inject(Router);

  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['2000-01-01', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted');
      console.log(this.registrationForm.value);

      //const hashedPassword = this._authService.hashPassword(this.registrationForm.value.password);

      const newUser: User = {
        isAdmin: false,
        isActive: true,
        //_id: uuidv4(), // Generates a unique ID for each registration
        ...this.registrationForm.value,
        photoId: "",
        createdDate: new Date().toISOString(),
        posts: [],
        friends: []
      };

      console.log('Form Submitted', newUser);
      //password: "$2a$10$jJ7gi/Btb/kvEMUFGwuZZ..BC5olhqqjAy8O4az8A0H/DIyo/SgrW"
      //console.log('verify password', this._authService.verifyPassword("Test@123", "$2a$10$jJ7gi/Btb/kvEMUFGwuZZ..BC5olhqqjAy8O4az8A0H/DIyo/SgrW"));
      //console.log('verify password 1', this._authService.verifyPassword("Test@1234", "$2a$10$jJ7gi/Btb/kvEMUFGwuZZ..BC5olhqqjAy8O4az8A0H/DIyo/SgrW"));

      // this._userService.registerUser(newUser).subscribe( (data)=>{
      //     console.log('response: ', data)
      // } );
      this._userService.registerUser(newUser).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.errorMessage = null;
          this._router.navigate(['/login']);
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.errorMessage = error;
        }
      });

    } else {
      console.log('Form is invalid');
      console.log(this.registrationForm);
      console.log(this.registrationForm.errors?.['required']);
    }
  }

}
