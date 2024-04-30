import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paimement',
  templateUrl: './paimement.component.html',
  styleUrl: './paimement.component.css'
})
export class PaimementComponent {
  constructor(private router : Router){}
  payer() {
    Swal.fire({
      icon: 'success',
      title: 'Succès',
      text: 'Paimenent validé.'
    });
    this.router.navigate(['/home']);
  }
}
