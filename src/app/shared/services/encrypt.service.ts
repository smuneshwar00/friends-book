import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }

  encrypt(data: any): string {
    const jsonString = JSON.stringify(data);
    return btoa(jsonString);
  }

  decrypt(ciphertext: string | null ): any {
    if(ciphertext){
      const jsonString = atob(ciphertext);
    return JSON.parse(jsonString);
    }
    return null;
  }
}
