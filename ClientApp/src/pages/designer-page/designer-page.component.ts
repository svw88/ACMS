import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DesignerService } from '../../services/designer.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ComponentType, Item, Page, SettingTypes } from '../../interfaces/page';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  templateUrl: 'designer-page.component.html',
})
export class DesignerPageComponent implements OnInit {

  componentTypes = ComponentType;

  route: string;
  page: Page;
  constructor(public designerService: DesignerService,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {


  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {

      this.route = params.get('name');

      this.page = this.designerService.pages.find(x => `${x.name}` === this.route);
      const parent = document.getElementById('boundary');
      for (let item of this.page.items) {
        item.dragPosition = { x: 0, y: 0 };
        item.dragPosition.x = item.x * parent.clientWidth;
        item.dragPosition.y = item.y * parent.clientHeight;
      }

    });

  }

  drop(event: { source: CdkDrag }, item: Item) {

    const pos = event.source.getFreeDragPosition();

    const parent = document.getElementById('boundary');
    this.designerService.pages.find(x => `${x.name}` === this.route).items.find(x => x.id == item.id).x = (pos.x) / parent.clientWidth;
    this.designerService.pages.find(x => `${x.name}` === this.route).items.find(x => x.id == item.id).y = (pos.y) / parent.clientHeight;

  }

  addItem(name: string) {

    let item: Item = { id: this.designerService.pages.find(x => `${x.name}` === this.route).items.length + 1, x: 0, y: 0, settings: new SettingTypes(ComponentType[name]), type: ComponentType[name] };
    this.designerService.pages.find(x => `${x.name}` === this.route).items.push(item);
    this.page = this.designerService.pages.find(x => `${x.name}` === this.route);
    
    this.page.items.find(x => x.id == item.id).dragPosition = { x: 0, y: 0 };

  }

  editItem(item: Item) {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '250px',
      data: { settings: item.settings }
    });

    dialogRef.afterClosed().subscribe(() => {
     
    });
  }


  deleteItem(item: Item) {

    this.designerService.pages.find(x => `${x.name}` === this.route).items.splice(this.designerService.pages.find(x => `${x.name}` === this.route).items.findIndex(s => s.id == item.id), 1);
    this.page = this.designerService.pages.find(x => `${x.name}` === this.route);
  }


  keys(item): Array<string> {
    var keys = Object.keys(item);
    return keys.slice(keys.length / 2);
  }
}
