import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceRanking {
    public dataRanking: Array<any>;

    public url: string = 'https://raw.githubusercontent.com/orivelton10/frontend-test/master/public/fazenda.json';
    constructor(private _http: Http) {
        this.getRanking();
    }

    public getRanking() {
        return this._http.get(this.url)
        .map((res: Response) => res.json());
    }
}
