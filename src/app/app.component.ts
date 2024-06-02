import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario3Component } from "./formulario3/formulario3.component";
import { ChildrenComponent } from "./children/children.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Formulario3Component, ChildrenComponent, FormsModule]
})
export class AppComponent {
  title = 'CURSO_ANGULAR';
}
