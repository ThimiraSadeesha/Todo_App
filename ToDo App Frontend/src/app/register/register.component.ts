import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators'; // Import catchError from rxjs/operators
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiservice.jwtUserToken.subscribe(token => {
      if (token) {
        this.router.navigateByUrl('/').then();
      }
    });
  }
}

//   registerUser(registerForm: NgForm): void {

//     if (registerForm.invalid) {
//       return;
//     }
  
//     const { username, password } = registerForm.value;
  
//     this.apiservice.registerUser(username, password)
//       .pipe(
//         catchError((error) => {
//           // Handle the error here, e.g., show an error message.
//           console.error('Registration error:', error);
//           return throwError(error); // Re-throw the error to continue propagating it.
//         })
//       )
//       .subscribe(() => {
//         registerForm.reset();
//         console.log('Registration successful');
//       });
//   }
// }
