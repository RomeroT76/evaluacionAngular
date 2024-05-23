import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaFormComponent } from './pages/tarea-form/tarea-form.component';
import { TareaListComponent } from './pages/tarea-list/tarea-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareaFormComponent, TareaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eva64romeroroberto';
}
