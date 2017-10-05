import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        return this.http.put('https://a4-tests.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http.get('https://a4-tests.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                const data = response.json();
                return data;
            });
    }

     getAppName() {
        return this.http.get('https://a4-tests.firebaseio.com/appName.json')
          .map(
                (response: Response) => {
                const data = response.json();
                return data;
            });
    }
}
