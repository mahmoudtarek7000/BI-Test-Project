import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IDataService} from "bi-interfaces/lib/interfaces/IDataService";
import {BIObservable} from "bi-interfaces/lib/interfaces/observable";
import {BehaviorSubject, map, Observable} from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class DataService extends BehaviorSubject<any> implements IDataService {
    public data: any[] = [];
    loading = true;
    APIURL!: string;
    Token:string= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicm9vdCIsImp0aSI6ImE0ZGQyZDMwLTdhN2EtNDc5NC1hYmM1LWM2ODhhYzY5MDNkMiIsIkJVSUQiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsImV4cCI6MTY4NDMzMzcyMiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1OTkyMSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.W8IQyRabW79deV46750xjZGzNE1gKN6sbbbUaphgo0I'

    constructor(private http: HttpClient) {
        super([])
    }

    public read(filter: string): void {
        this.fetch(filter).subscribe((data: any[]) => {
            this.data = data;
            super.next(data);
            this.loading = false;
        });
    }

    public fetch(filter: string): any{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http
            .get(`${this.APIURL}?${filter}`, httpOptions)
            .pipe(map((data: any) => ({data: data.value, total: data['@odata.count'] ? data['@odata.count']: data.value.length})));
    }

    delete(id: string): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.delete<any>(`${this.APIURL}/${id}`, httpOptions)
    }

    add(data: any): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.post<any>(`${this.APIURL}`, data, httpOptions)
    }

    edit(data: any, id: string): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.put<any>(`${this.APIURL}/${id}`, data, httpOptions)
    }
}
