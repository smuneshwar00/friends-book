import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private saltRounds = 10;

  constructor() { }

  hashPassword(password: string): string {
    return bcrypt.hashSync(password, this.saltRounds);
  }

  verifyPassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
