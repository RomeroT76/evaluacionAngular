import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, query } from '@angular/fire/firestore';
import { Tarea } from '../domain/Tarea';

@Injectable({
  providedIn: 'root'
})
export class FStoreService {

  constructor(private fStore: Firestore) { }

  guardarTarea(tarea: Tarea) {
    addDoc(collection(this.fStore, 'tareas'), Object.assign({}, tarea))
  }

  recuperarTareas() {
    return getDocs(query(collection(this.fStore, 'tareas')))
  }

  eliminarTarea(id: string) {
    
  }
}
