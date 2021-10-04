import { TarefaModule } from './../models/tarefa/tarefa.module';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncoesService {

  TarefasApiUrl= 'http://localhost:3333/cards';

  constructor(private http: HttpClient) { }

  getListaTarefas():Observable<TarefaModule[]>{
    return this.http.get<TarefaModule[]>(this.TarefasApiUrl);
  }

  addTarefas(cards: TarefaModule):Observable<TarefaModule> {

    return this.http.post<TarefaModule>(this.TarefasApiUrl,cards);
  }
  atualizaTarefa(cards: TarefaModule):Observable<TarefaModule> {
    return this.http.put<TarefaModule>(this.TarefasApiUrl,cards);
  }

  deletaTarefa(id: number):Observable<TarefaModule> {

    return this.http.delete<any>(`${this.TarefasApiUrl}?id=${id}`);
  }

}

// dialogRef.afterClosed().subscribe(result => {

//   if(result!=undefined){
//     this.funcaoService.addTarefas(result).subscribe((data:TarefaModule) =>{
//      this.sprint.push(result);
//     }
//     )


//   }
//  });
