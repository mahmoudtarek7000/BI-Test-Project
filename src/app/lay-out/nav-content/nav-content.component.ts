import { Component, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { ExpansionPanelComponent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent {
  @Input() selectedItem!: string;
  @Input() items: any;
  @Input() collapsed!: boolean;
  @Output() backToNav = new EventEmitter<any>();

  returnToNav(): void{
this.selectedItem = "";
this.collapsed = false;
this.backToNav.emit();
  }
}
