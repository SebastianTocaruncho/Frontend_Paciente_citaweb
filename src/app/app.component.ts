import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend_paciente';
  mostrarFormulario: boolean = false;
  mostrarFormulario2: boolean = false;
  mostrarFormulario3: boolean = false;
  mostrarFormulario4: boolean = false;

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
  
  toggleFormulario2() {
    this.mostrarFormulario2 = !this.mostrarFormulario2;
  }

  toggleFormulario3() {
    this.mostrarFormulario3 = !this.mostrarFormulario3;
  }

  toggleFormulario4() {
    this.mostrarFormulario4 = !this.mostrarFormulario4;
  }
}
