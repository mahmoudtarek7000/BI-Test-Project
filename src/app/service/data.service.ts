import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataSource } from "bi-interfaces/lib/interfaces/IDataSource";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Validators } from '@angular/forms';
import { HttpService } from './http.service';
import { DataTypes } from '../enums/DataType';
import { DataSourceType } from 'bi-interfaces/lib/enums/DataSourceType';
@Injectable({
    providedIn: 'root'
})
export class DataService extends BehaviorSubject<any> implements IDataSource {
    public data: any[] = [];
    Params!: string;
    Key!: string;
    loading: boolean = true;
    APIURL!: string;
    Type!: DataSourceType;
    IsClientSideFilter!: boolean;
    Columns = [
        { Name: "AllowPriceEdit", DataType: DataTypes.Text },
        { Name: "ArabicDescription", DataType: DataTypes.Text },
        { Name: "CategoryId", DataType: DataTypes.Text },
        { Name: "CreatedOn", DataType: DataTypes.Text },
        { Name: "Createdby", DataType: DataTypes.Text },
        { Name: "DefaultCreditLimit", DataType: DataTypes.Text },
        { Name: "DefaultPaymentTerms", DataType: DataTypes.Text },
        { Name: "DefaultPriceListID", DataType: DataTypes.Text },
        { Name: "DefaultTempCreditLimit", DataType: DataTypes.Text },
        { Name: "DefaultTermsBranch", DataType: DataTypes.Text },
        { Name: "Description", DataType: DataTypes.Text },
        { Name: "EditPriceMinPCT", DataType: DataTypes.Text },
        { Name: "ModifiedBy", DataType: DataTypes.Text },
        { Name: "ModifiedOn", DataType: DataTypes.Text },
        { Name: "RecID", DataType: DataTypes.Text },
        { Name: "RecordSource", DataType: DataTypes.Text },
        { Name: "SalesTypeID", DataType: DataTypes.Text },
        { Name: "buid", DataType: DataTypes.Text },
        { Name: "rowguid", DataType: DataTypes.Text }
    ]

    constructor(private http: HttpService) {
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
