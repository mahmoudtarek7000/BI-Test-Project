import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IDataSource } from "bi-interfaces/lib/interfaces/IDataSource";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Validators } from '@angular/forms';
import { HttpService } from './http.service';
import { DataTypes } from '../enums/DataType';
import { DataSourceType } from 'bi-interfaces/lib/enums/DataSourceType';
@Injectable()
export class DataService extends BehaviorSubject<any> implements IDataSource {
    public data: any[] = [];
    Params!: {
        Name: string;
        Operator: string;
        value: string;
        DataType: any;
    }[];
    Key!: string;
    loading: boolean = true;
    APIURL!: string;
    Type!: DataSourceType;
    IsClientSideFilter!: boolean;
    Columns!: {
        Name: string,
        DataType: DataTypes,
    }[];
    private http = inject(HttpService)
    constructor() {
        super([])
    }

    public read(filter: string): void {
        this.http.fetch(this.APIURL, filter).subscribe((data: any[]) => {
            this.data = data;
            super.next(data);
            this.loading = false;
        });
    }


    delete(id: string): any {
        return this.http.delete(`${this.APIURL}/${id}`)
    }

    add(data: any): any {
        return this.http.add(`${this.APIURL}`, data)
    }

    edit(data: any, id: string): any {
        return this.http.edit(`${this.APIURL}/${id}`, data)
    }
}
