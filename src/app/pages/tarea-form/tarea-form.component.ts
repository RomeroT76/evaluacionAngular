import { Component } from '@angular/core';
import { FStoreService } from '../../services/f-store.service';
import { Tarea } from '../../domain/Tarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea-form.component.html',
  styleUrl: './tarea-form.component.scss'
})
export class TareaFormComponent {

  task = new Tarea()


  constructor(private fStoreService: FStoreService) { }

  saveTask() {
    this.fStoreService.guardarTarea(this.task)
  }
}
