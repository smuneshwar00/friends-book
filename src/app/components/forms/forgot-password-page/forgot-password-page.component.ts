import { Component } from '@angular/core';

@Component({
  selector: 'fb-forgot-password-page',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.css'
})
export class ForgotPasswordPageComponent {

  router ='';

  onSubmit(){
    console.log('Forward to Reset Password...')
    //verify user logic
    
  }

}
