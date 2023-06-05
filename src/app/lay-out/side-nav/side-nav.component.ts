import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from "@progress/kendo-angular-layout";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public selected = "";
  collapsed: any;
  items!: Array<{
    text?: string;
    icon?: string;
    speratorTitle?: string;
    selected?: boolean;
    separator?: boolean;
    disabled?: boolean;
  }>;
constructor(){
}
ngOnInit(): void {
  this.items = [
    { text: "Home", icon: 'assets/icons/Home.svg' },
    { text: "Recent", icon: "assets/icons/Recent.svg" },
    { text: "Favourite", icon: "assets/icons/Favorite.svg" },
    { separator: true },
    {text: "MY DATA", disabled: true},
    { text: "Dashboard", icon: "assets/icons/Dashboard.svg" },
    { text: "Activites", icon: "assets/icons/Activities.svg" },
    { separator: true, text: "MODULES" },
    {text: "MODULES", disabled: true},
    {text: "Adminstration", icon: "assets/icons/Adminstration.svg"},
    {text: "Accounts Receivable", icon: "assets/icons/AccountsReceivable.svg"},
    {text: "Merchandising", icon: "assets/icons/Merchandising.svg"},
    {text: "Inventory Management", icon: "assets/icons/InventoryManagement.svg"},
    {text: "General Ledger", icon: "assets/icons/GeneralLedger.svg"},
    {text: "Accounts Payable", icon: "assets/icons/Accounts Payable.svg"},
    {text: "Point of Sale", icon: "assets/icons/Point of Sale.svg"},
    {text: "Sales Commissions", icon: "assets/icons/Sales Commissions.svg"},
    {text: "Fixed Assets", icon: "assets/icons/Fixed Assets.svg"},
    {text: "Fleet Integration", icon: "assets/icons/Fleet Integration.svg"},
    {text: "Field Service", icon: "assets/icons/Field Service.svg"},
  ];
}
  
  public onSelect(ev: DrawerSelectEvent): void {
    this.collapsed = true;
    this.selected = ev.item.text;
  }
  changeBackGround(): void{
this.collapsed = !this.collapsed;
console.log(this.items[3].separator);
  }
}
