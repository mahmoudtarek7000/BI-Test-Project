import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { IColumns } from 'bi-interfaces/lib/interfaces/IColumns.interface';
import { DataTypes } from './enums/DataType';
import { IGrid } from 'bi-interfaces/lib/interfaces/IGrid';
import { DataService } from "./service/data.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'BI-Project';
	columns: IColumns[] = [
		{ DisplayName: "CategoryId", Name: "CategoryId", DataType: DataTypes.Text, controlType: "text", Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "Description", Name: "Description", DataType: DataTypes.Text, controlType: 'text', Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "ArabicDescription", Name: "ArabicDescription", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "SalesTypeID", Name: "SalesTypeID", DataType: DataTypes.Text, controlType: 'text', Validators: Validators.required, IsEditable: false, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "rowguid", Name: "rowguid", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultTermsBranch", Name: "DefaultTermsBranch", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultPaymentTerms", Name: "DefaultPaymentTerms", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultPriceListID", Name: "DefaultPriceListID", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultCreditLimit", Name: "DefaultCreditLimit", DataType: DataTypes.NUMERIC, controlType: 'numeric', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "EditPriceMinPCT", Name: "EditPriceMinPCT", DataType: DataTypes.NUMERIC, controlType: 'numeric', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false }
	]
	@ViewChild('Header') BIGrid!: IGrid;
	constructor(public dataService: DataService) {
		this.dataService.APIURL = "https://bifmcg.bi-technologies.net/SalesBuzzOData/HH_AR_CustomerCategories";
	}
}
