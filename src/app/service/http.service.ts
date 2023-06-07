import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataService } from "bi-interfaces/lib/interfaces/IDataService";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export class HttpService extends BehaviorSubject<any> implements IDataService {
    public data: any[] = [];
    loading = true;
    Token: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicm9vdCIsImp0aSI6ImM3ZDMwYzZkLWQ0MGEtNGNlNC05ZTM3LTBmYmE5MWRiZTg0YSIsIkJVSUQiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsImV4cCI6MTY4NjEzNDY2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1OTkyMSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.Q-ePSs0jHa8Im3JYYJsRujGfCyih4viRJATNkVgbyec'
    
    constructor(private http: HttpClient) {
        super([])
    }


    public fetch(APIURL: string, filter: string): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http
            .get(`${APIURL}?${filter}`, httpOptions)
            .pipe(
                map((data: any) => ({ data: data.value, total: data['@odata.count'] ? data['@odata.count'] : data.value.length })),
                map(res => ({ data: res['data'].map((response: any) => ({ ...response, Date: new Date(response.Date) })), total: res.total }))
            );
    }

    delete(APIURL: string): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.delete<any>(`${APIURL}`, httpOptions)
    }

    add(APIURL: string,data: any): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.post<any>(`${APIURL}`, data, httpOptions)
    }

    edit(APIURL: string, data: any): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.put<any>(`${APIURL}`, data, httpOptions)
    }
}
