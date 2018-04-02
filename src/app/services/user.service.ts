import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Users } from "../stores/user.store";

import { ApiUrls } from "../shared/classes/apiurls";
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor( private _http : Http) { }

  getUsers( ) {
    return this._http.get( ApiUrls.getUsers )
      .map( res => res.json());
  }

  createUser( data ){
    return this._http.post( ApiUrls.createUser , data )
      .map( res => res.json );
  }

}
