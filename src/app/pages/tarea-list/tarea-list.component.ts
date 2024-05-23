import { Component } from '@angular/core';
import { FStoreService } from '../../services/f-store.service';

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [],
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.scss'
})
export class TareaListComponent {
  tasks: any

  constructor(private fStoreService: FStoreService) { }

  ngOnInit(): void {
    this.fStoreService.recuperarTareas().then(data => {
      this.tasks = data.docs.map((doc:any) => {
        return {
          titulo: doc.titulo,
          ...doc.data()
        }
      })
    })
  }

  deleteTask(id: string) {
    this.fStoreService.eliminarTarea(id)
    this.ngOnInit()
  }
}
