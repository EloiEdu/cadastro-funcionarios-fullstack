import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    login(email: string, password: string): Promise<boolean> {

    return new Promise((resolve) => {

      // Simula uma chamada ao backend
      setTimeout(() => {

        if (
          email === 'admin@empresa.com' &&
          password === '123456'
        ) {
          resolve(true);
        } else {
          resolve(false);
        }

      }, 2000);

    });

  }

}
