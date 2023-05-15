import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IDatasService } from '../interfaces/IDataService';
@Injectable({
    providedIn: 'root'
})
export class DatasService extends IDatasService {
    public data: any[] = [];
    Token:string= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicm9vdCIsImp0aSI6Ijc1MmE2YTcwLWQ0ZGYtNGE2OC04ZjE1LTgxMTNmNDc3ZDRlMiIsIkJVSUQiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsImV4cCI6MTY4NDE2Mjc4MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1OTkyMSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.W_Ep9X1ee1Ro8c4peohEHuIJ4FdaY_5EhEfl43Kzdmo'

    constructor(private http: HttpClient) {
        super()
    }

    public read(filter: string): void {
        this.fetch(filter).subscribe((data) => {
            this.data = data;
            super.next(data);
            this.loading = false;
        });
    }

    public fetch(filter: string): Observable<any> {
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

    delete(id: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.delete<any>(`${this.APIURL}/${id}`, httpOptions)
    }

    add(data: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.post<any>(`${this.APIURL}`, data, httpOptions)
    }

    edit(data: any, id: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": this.Token
            })
        };
        return this.http.put<any>(`${this.APIURL}/${id}`, data, httpOptions)
    }
}
