import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { IColumns } from 'bi-interfaces/lib/interfaces/IColumns.interface';
import { DataTypes } from './enums/DataType';
import { IGrid } from 'bi-interfaces/lib/interfaces/IGrid';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'BI-Project';
	@ViewChild('Header') BIGrid!: IGrid;
	config1 = this._testServiceFactory()
	config2 = this._testServiceFactory()
	columns!: IColumns[];
	items = [
		{
			text: "Dashboard", icon: 'assets/icons/Dashboard.svg'
		},
		{
			text: "Supervisor", icon: "assets/icons/Adminstration.svg", children: [
				{
					text: "Setup", icon: 'assets/icons/Home.svg', children: [
						{ text: "Visit Steps", icon: 'assets/icons/Home.svg', path: "Supervisor/screen/12" },
						{ text: "Salesman Type Visit Steps", icon: 'assets/icons/Home.svg', path: "Supervisor/screen/17" },
						{ text: "Exceptions Configuration", icon: 'assets/icons/Home.svg', path: "Supervisor/screen/88" },
						{ text: "Competitors", icon: 'assets/icons/Home.svg', path: "Supervisor/screen/132" },
						{ text: "Questions", icon: 'assets/icons/Home.svg', path: "Supervisor/screen/148" },
						{ text: "Data Collection", icon: 'assets/icons/Home.svg', path: "Supervisor/screen/150" },
						{ text: "Online Request Settings", icon: 'assets/icons/Home.svg', path: "Supervisor/screen/203" },
					]
				},
				{
					text: "Journals", children: [
						{ text: "Transfer Request", path: "Supervisor/screen/1" },
						{ text: "Pending Approvals", path: "Supervisor/screen/10" },
						{ text: "Journey Plan", path: "Supervisor/screen/2" },
						{ text: "Unload Requests", path: "Supervisor/screen/6" },
						{ text: "Sales Order", path: "Supervisor/screen/28" },
						{ text: "Simplified Sales Order", path: "Supervisor/screen/30" },
						{ text: "Salesman Requests", path: "Supervisor/screen/40" },
						{ text: "Exceptions", path: "Supervisor/screen/80" },
						{ text: "Salesman Route", path: "Supervisor/screen/143" },
						{ text: "Review Captured Images", path: "Supervisor/screen/209" },
						{ text: "Online requests", path: "Supervisor/screen/204" },
					]
				}
			]
		},
		{
			text: "Inventory Management", icon: "assets/icons/InventoryManagement.svg", children: [
				{
					text: "Setup", children: [
						{
							text: "Warehouse", children: [
								{ text: "Warehouse Definition", path: "Supervisor/screen/202" }
							]
						},
						{
							text: "Manufacturer", path: "Supervisor/screen/181"
						}
					]
				},
				{
					text: "Journals", children: [
						{
							text: "Salesman Stock Count", path: "Supervisor/screen/219"
						},
						{
							text: "Inventory Transaction", path: "Supervisor/screen/211"
						}
					]
				}
			]
		},
		{ separator: true },
		{
			text: "Reports", icon: "assets/icons/AccountsReceivable.svg", children: [
				{
					text: "Report Configuration", path: "Supervisor/screen/245"
				},
				{
					text: "visitPr", path: "Supervisor/screen/392"
				}
			]
		},
		{
			text: "General Ledger", icon: "assets/icons/GeneralLedger.svg", children: [
				{
					text: "Journals", children: [
						{ text: "General Journal", path: "Supervisor/screen/222?Module=0" }
					]
				}
			]
		},
		{ separator: true },
		{
			text: "Accounts Receivable", icon: "assets/icons/AccountsReceivable.svg", children: [
				{
					text: "Setup", children: [
						{
							text: "Customer", children: [
								{
									text: "Customer Categories", path: "Supervisor/screen/202"
								}
							]
						},
						{
							text: "Geography", children: [
								{
									text: "Region", path: "Supervisor/screen/372"
								}
							]
						},
						{
							text: "Employee", children: [
								{
									text: "HH_AR_SalesmenCats", path: "Supervisor/screen/373"
								},
								{
									text: "Salesman Day Opening", path: "Supervisor/screen/244"
								}
							]
						},
						{
							text: "VisitManagement", children: [
								{
									text: "HH_ReturnReasons", path: "Supervisor/screen/375"
								}
							]
						},
						{
							text: "CDA Lists", path: "Supervisor/screen/167"
						},
						{
							text: "Reasons", path: "Supervisor/screen/163"
						},
						{
							text: "Rebate group", path: "Supervisor/screen/164"
						},
						{
							text: "Target Net Revenue", path: "Supervisor/screen/155"
						},
						{
							text: "Employee Definition", path: "Supervisor/screen/210"
						}
					]
				},
				{
					text: "Journals", children: [
						{
							text: "Sales Order", path: "Supervisor/screen/256"
						},
						{
							text: "General Journal", path: "Supervisor/screen/222?Module=1"
						}
					]
				},
				{
					text: "Periodic", children: [
						{
							text: "Stock Check Availablity", path: "Supervisor/screen/351"
						}
					]
				},
				{
					text: "Sales Order", path: "Supervisor/screen/256"
				}
			]
		},
		{
			text: "Accounts Payable", icon: "assets/icons/Accounts Payable.svg", children: [
				{
					text: "Journals", children: [
						{
							text: "Purchase Order", path: "Supervisor/screen/371"
						},
						{
							text: "General Journal", path: "Supervisor/screen/222?Module=2"
						}
					]
				}
			]
		},
		{
			text: "Tools", icon: "assets/icons/AccountsReceivable.svg", children: [
				{
					text: "Import", path: "Supervisor/screen/11"
				},
				{
					text: "Competition", path: "Supervisor/screen/22"
				}
			]
		}
	];
	constructor(@Inject('dataService') public _testServiceFactory: any) {
		this.config1.APIURL = "https://bifmcg.bi-technologies.net/SalesBuzzOData/HH_AR_CustomerCategories";
		this.config1.Key = "CategoryId";
		this.config1.Columns = [
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
		this.config2.APIURL = "https://bifmcg.bi-technologies.net/SalesBuzzOData/HH_ReturnReasons"
		this.config2.Key = "ID"
		this.config2.Columns = [
			{ Name: "ID", DataType: DataTypes.Text },
			{ Name: "L1Description", DataType: DataTypes.Text },
			{ Name: "L2Description", DataType: DataTypes.Text }
		]
	}

	ngOnInit(): void {
		this.columns = [
			{ DisplayName: "CategoryId", Name: "CategoryId", DataType: DataTypes.Text, controlType: "text", Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
			{ DisplayName: "Description", Name: "Description", DataType: DataTypes.Text, controlType: 'text', Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
			{ DisplayName: "ArabicDescription", Name: "ArabicDescription", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
			{
				DisplayName: "SalesTypeID", Name: "SalesTypeID", DataType: DataTypes.Text, controlType: 'lookup', Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true,
				lookupTemplate: {
					Key: this.config2.Key,
					ID: this.config2.ID,
					DataSource: this.config2
				}
			},
		]
	}

	ngAfterViewInit(): void {
		this.BIGrid.StopSave.next(false);
		this.BIGrid.StopDelete.next(false);
		this.BIGrid.BeforeActionSave = () => {
			Swal.fire({
				title: 'Do you want to save the changes?',
				showDenyButton: true,
				confirmButtonText: 'Save',
				denyButtonText: `Don't save`,
			}).then(res => {
				if (res['value']) this.BIGrid.StopSave.next(true);
				else this.BIGrid.StopSave.next(false);
			})
		}

		this.BIGrid.BeforeActionDelete = () => {
			Swal.fire({
				title: 'Are you sure to delete?',
				icon: 'warning',
				showCloseButton: true,
				showCancelButton: true,
				focusConfirm: false,
				confirmButtonText: 'Yes',
				cancelButtonText: 'Cancel',
			}).then(res => {
				if (res['value']) this.BIGrid.StopDelete.next(true);
				else this.BIGrid.StopDelete.next(false);
			})
		}
	}

}
