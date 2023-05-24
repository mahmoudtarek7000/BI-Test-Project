import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IColumns } from 'bi-interfaces/lib/interfaces/IColumns.interface';
import { DataTypes } from './enums/DataType';
import { IGrid } from 'bi-interfaces/lib/interfaces/IGrid';
import { DataService } from "./service/data.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'BI-Project';
	columns: IColumns[] = [
		{ DisplayName: "CategoryId", Name: "CategoryId", DataType: DataTypes.Text, controlType: "text", Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "Description", Name: "Description", DataType: DataTypes.Text, controlType: 'text', Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "ArabicDescription", Name: "ArabicDescription", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "SalesTypeID", Name: "SalesTypeID", DataType: DataTypes.Text, controlType: 'text', Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "rowguid", Name: "rowguid", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultTermsBranch", Name: "DefaultTermsBranch", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultPaymentTerms", Name: "DefaultPaymentTerms", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultPriceListID", Name: "DefaultPriceListID", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "DefaultCreditLimit", Name: "DefaultCreditLimit", DataType: DataTypes.NUMERIC, controlType: 'numeric', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false },
		{ DisplayName: "EditPriceMinPCT", Name: "EditPriceMinPCT", DataType: DataTypes.NUMERIC, controlType: 'numeric', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: false }
	]
	@ViewChild('Header') BIGrid!: IGrid;
	form: any = {};
	formGroup!: FormGroup;
	CategoryId: any;
	dataItem: any;
	constructor(public dataService: DataService, private fb: FormBuilder, private cd: ChangeDetectorRef) {
		this.dataService.APIURL = "https://bifmcg.bi-technologies.net/SalesBuzzOData/HH_AR_CustomerCategories";
	}

	// changeValue(event: any, controlName: string) {
	// 	this.dataItem[controlName] = event.target.value
	// }

	// getDataItem(event: any) {
	// 	this.dataItem = event.dataItem
	// }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		if (this.BIGrid) {
			this.columns.forEach(res => this.form[res.Name] = [{ value: res.DefaultValue, disabled: !res.IsEditable }, res.Validators]);
			this.BIGrid.CurrentSelectRow = this.fb.group(this.form);
			// this.BIGrid.CurrentSelectRow.valueChanges.subscribe(res => {
			// 	if (this.dataItem && res) {
			// 		this.dataItem['CategoryId'] = res['CategoryId'];
			// 		this.dataItem['Description'] = res['Description'];
			// 		this.dataItem['ArabicDescription'] = res['ArabicDescription'];
			// 		this.dataItem['SalesTypeID'] = res['SalesTypeID'];
			// 	}
			// })
			this.cd.detectChanges()
		}
	}
}
