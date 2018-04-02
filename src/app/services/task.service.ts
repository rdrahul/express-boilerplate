import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ApiUrls } from "../shared/classes/apiurls";
import 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {

  constructor( private _http : Http ) { 
    
  }

  getTasks(){
    return this._http.get( ApiUrls.getTasks ).map( res => res.json() ) ;
  }

  getuserTasks( userId ){
    return this._http.get(ApiUrls.getUserTasks(userId)).map( res => res.json());
  }

  createTask(data){
    return this._http.post(ApiUrls.createTasks , data ).map( res => res.json() )  ;
  }

  updateTask(){

  }

  deleteTask(){

  }
}
