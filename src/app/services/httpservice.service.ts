import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/Rx';


@Injectable()
export class HttpService {
    headers: Headers = new Headers();

    constructor(private _http: Http) { }

    post(url, body, isAuthorized = false, headers = null) {
        this.headers = new Headers();

        if (headers != null) this._createHeaders(headers);

        if(isAuthorized) this._createAuthorizationHeaders();

        let options = new RequestOptions({ headers: this.headers });

        return this._http.post(url, body, options)
            .map(res => res.json())
            .catch(this._handleObservableError);
    }

    get(url, isAuthorized = false, headers = null) {
        this.headers = new Headers();

        if (headers != null) this._createHeaders(headers);

        if(isAuthorized) this._createAuthorizationHeaders();

        let options = new RequestOptions({ headers: this.headers });

        return this._http.get(url, options)
            .map(res => res.json())
            .catch(this._handleObservableError);
    }

    put(url, body, isAuthorized = false, headers = this.headers) {
        this.headers = new Headers();

        if (headers != null) this._createHeaders(headers);

        if(isAuthorized) this._createAuthorizationHeaders();

        let options = new RequestOptions({ headers: this.headers });

        return this._http.put(url, body, options)
            .map(res => res.json())
            .catch(this._handleObservableError);
    }

    delete(url, isAuthorized = false, headers = this.headers) {
        this.headers = new Headers();

        if (headers != null) this._createHeaders(headers);

        if(isAuthorized) this._createAuthorizationHeaders();

        let options = new RequestOptions({ headers: this.headers });

        return this._http.delete(url, options)
            .map(res => res.json())
            .catch(this._handleObservableError)
    }

    _handleObservableError(error) {
        return Observable.throw(error);
    }

 
    _createAuthorizationHeaders() {
        let token = JSON.parse(localStorage.getItem('token'));
        this.headers.append('x-access-token', token);
    }

    _createHeaders(headers) {
        Object.keys(headers)
            .forEach((key) => {
                this.headers.append(key, headers[key]);
            });
    }
}