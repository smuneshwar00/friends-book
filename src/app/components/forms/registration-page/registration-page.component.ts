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

  defaultPic = "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";

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
        photoId: this.defaultPic,
        createdDate: new Date().toISOString()
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
