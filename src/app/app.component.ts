import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { IColumns } from 'bi-interfaces/lib/interfaces/IColumns.interface';
import { DataTypes } from './enums/DataType';
import { DataService } from "./service/data.service";
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
	columns: IColumns[] = [
		{ DisplayName: "CategoryId", Name: "CategoryId", DataType: DataTypes.Text, controlType: "text", Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "Description", Name: "Description", DataType: DataTypes.Text, controlType: 'text', Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "ArabicDescription", Name: "ArabicDescription", DataType: DataTypes.Text, controlType: 'text', Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
		{ DisplayName: "SalesTypeID", Name: "SalesTypeID", DataType: DataTypes.Text, controlType: 'text', Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, viewCellStyle: "", IsVisible: true },
	]
	items = [
		{
		  text: "Dashboard", icon: 'assets/icons/Home.svg'
		},
		{
		  text: "Supervisor", icon: "assets/icons/Recent.svg", childrens: [
			{
			  text: "Setup", icon: 'assets/icons/Home.svg', childrens: [
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
			  text: "Journals", icon: 'assets/icons/Home.svg', childrens: [
				{ text: "Transfer Request", icon: "assets/icons/Home.svg", path: "Supervisor/screen/1" },
				{ text: "Pending Approvals", icon: "assets/icons/Home.svg", path: "Supervisor/screen/10" },
				{ text: "Journey Plan", icon: "assets/icons/Home.svg", path: "Supervisor/screen/2" },
				{ text: "Unload Requests", icon: "assets/icons/Home.svg", path: "Supervisor/screen/6" },
				{ text: "Sales Order", icon: "assets/icons/Home.svg", path: "Supervisor/screen/28" },
				{ text: "Simplified Sales Order", icon: "assets/icons/Home.svg", path: "Supervisor/screen/30" },
				{ text: "Salesman Requests", icon: "assets/icons/Home.svg", path: "Supervisor/screen/40" },
				{ text: "Exceptions", icon: "assets/icons/Home.svg", path: "Supervisor/screen/80" },
				{ text: "Salesman Route", icon: "assets/icons/Home.svg", path: "Supervisor/screen/143" },
				{ text: "Review Captured Images", icon: "assets/icons/Home.svg", path: "Supervisor/screen/209" },
				{ text: "Online requests", icon: "assets/icons/Home.svg", path: "Supervisor/screen/204" },
			  ]
			}
		  ]
		},
		{
		  text: "Inventory Management", icon: "assets/icons/Favorite.svg", childrens: [
			{
			  text: "Setup", icon: "assets/icons/Favorite.svg", childrens: [
				{
				  text: "Warehouse", icon: "assets/icons/Favorite.svg", childrens: [
					{ text: "Warehouse Definition", icon: "assets/icons/Favorite.svg", path: "Supervisor/screen/202" }
				  ]
				},
				{
				  text: "Manufacturer", icon: "assets/icons/Favorite.svg", path: "Supervisor/screen/181"
				}
			  ]
			},
			{
			  text: "Journals", icon: "assets/icons/Favorite.svg", childrens: [
				{
				  text: "Salesman Stock Count", icon: "assets/icons/Favorite.svg", path: "Supervisor/screen/219"
				},
				{
				  text: "Inventory Transaction", icon: "assets/icons/Favorite.svg", path: "Supervisor/screen/211"
				}
			  ]
			}
		  ]
		},
		{ separator: true },
		{
		  text: "Reports", icon: "assets/icons/Dashboard.svg", childrens: [
			{
			  text: "Report Configuration", icon: "assets/icons/Dashboard.svg", path: "Supervisor/screen/245"
			},
			{
			  text: "visitPr", icon: "assets/icons/Dashboard.svg", path: "Supervisor/screen/392"
			}
		  ]
		},
		{
		  text: "General Ledger", icon: "assets/icons/Activities.svg", childrens: [
			{
			  text: "Journals", icon: "assets/icons/Activities.svg", childrens: [
				{ text: "General Journal", icon: "assets/icons/Activities.svg", path: "Supervisor/screen/222?Module=0" }
			  ]
			}
		  ]
		},
		{ separator: true },
		{
		  text: "Accounts Receivable", icon: "assets/icons/AccountsReceivable.svg", childrens: [
			{
			  text: "Setup", icon: "assets/icons/Merchandising.svg", childrens: [
				{
				  text: "Customer", icon: "assets/icons/Merchandising.svg", childrens: [
					{
					  text: "Customer Categories", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/202"
					}
				  ]
				},
				{
				  text: "Geography", icon: "assets/icons/Merchandising.svg", childrens: [
					{
					  text: "Region", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/372"
					}
				  ]
				},
				{
				  text: "Employee", icon: "assets/icons/Merchandising.svg", childrens: [
					{
					  text: "HH_AR_SalesmenCats", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/373"
					},
					{
					  text: "Salesman Day Opening", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/244"
					}
				  ]
				},
				{
				  text: "VisitManagement", icon: "assets/icons/Merchandising.svg", childrens: [
					{
					  text: "HH_ReturnReasons", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/375"
					}
				  ]
				},
				{
				  text: "CDA Lists", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/167"
				},
				{
				  text: "Reasons", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/163"
				},
				{
				  text: "Rebate group", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/164"
				},
				{
				  text: "Target Net Revenue", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/155"
				},
				{
				  text: "Employee Definition", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/210"
				}
			  ]
			},
			{
			  text: "Journals", icon: "assets/icons/Merchandising.svg", childrens: [
				{
				  text: "Sales Order", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/256"
				},
				{
				  text: "General Journal", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/222?Module=1"
				}
			  ]
			},
			{
			  text: "Periodic", icon: "assets/icons/Merchandising.svg", childrens: [
				{
				  text: "Stock Check Availablity", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/351"
				}
			  ]
			},
			{
			  text: "Sales Order", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/256"
			}
		  ]
		},
		{
		  text: "Accounts Payable", icon: "assets/icons/Merchandising.svg", childrens: [
			{
			  text: "Journals", icon: "assets/icons/Merchandising.svg", childrens: [
				{
				  text: "Purchase Order", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/371"
				},
				{
				  text: "General Journal", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/222?Module=2"
				}
			  ]
			}
		  ]
		},
		{
		  text: "Tools", icon: "assets/icons/Merchandising.svg", childrens: [
			{
			  text: "Import", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/11"
			},
			{
			  text: "Competition", icon: "assets/icons/Merchandising.svg", path: "Supervisor/screen/22"
			}
		  ]
		}
	  ];
	constructor(public dataService: DataService) {
		this.dataService.APIURL = "https://bifmcg.bi-technologies.net/SalesBuzzOData/HH_AR_CustomerCategories";
		this.dataService.Key = "CategoryId";
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.BIGrid.StopSave.next(false);
		this.BIGrid.BeforeAction = () => {
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
	}

}
