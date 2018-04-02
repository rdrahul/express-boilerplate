import { HttpService  } from "./httpservice.service";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { ApiUrls } from "../shared/classes/apiurls";

@Injectable()
export class AuthService{

	loggedIn : Boolean = false;
	constructor( private _httpService : HttpService){
		this.loggedIn = this.isLoggedIn();
	}

	login( data ){
		return this._httpService.post( ApiUrls.login , data   );
	}

	register( data ){
		return this._httpService.post( ApiUrls.createUser , data );
	}

	loginUser(data){
		localStorage.setItem("token" , data);
		return true;
	}

	isLoggedIn(){
		if ( localStorage.getItem('token')){
			return true;
		}
		return false;
	}
}