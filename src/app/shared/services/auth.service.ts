import { Injectable } from '@angular/core';
//import * as bcrypt from 'bcryptjs';
//import * as jwt from 'jsonwebtoken';

//Module "crypto" has been externalized for browser compatibility. 
//Cannot access "crypto.randomBytes" in client code -> because of using jsonwebtoken in angular instead in backend with node
          

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private saltRounds = 10;

  // private secretKey = 'my-fb-app-secret-key';

  constructor() { }

  // hashPassword(password: string): string { used to encrypt the passwords
  //   return bcrypt.hashSync(password, this.saltRounds);
  // }

  verifyPassword(password: string, hash: string | undefined): boolean { //used to comapre string password with actual encrypted password
    // if(!hash){
    //   return false;
    // }
    //return bcrypt.compareSync(password, hash);    

    // hash was supposed to be encrypted password but because of running into externalized for browser compatibility issues
    // im gonna use plain passwords in strings now
    return password===hash;    
  }




  generateToken(payload: any): string { //used to generate actual JWT with secret-key and payload
    //return jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
    return "1234.jwt.token";
  }
}
