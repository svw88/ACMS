import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DesignerService } from '../../services/designer.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Item, Page } from '../../interfaces/page';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  templateUrl: 'designer-page.component.html',
})
export class DesignerPageComponent implements OnInit {

  route: string;
  page: Page;
  constructor(public designerService: DesignerService, public activatedRoute: ActivatedRoute) {


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

    let item: Item = { id: this.designerService.pages.find(x => `${x.name}` === this.route).items.length + 1, x: 0, y: 0, settings: {}, type: "NavBarComponent" };
    this.designerService.pages.find(x => `${x.name}` === this.route).items.push(item);
    this.page = this.designerService.pages.find(x => `${x.name}` === this.route);

    this.page.items.find(x => x.id == item.id).dragPosition = { x: 0, y: 0 };

  }

  deleteItem(item: Item) {

    this.designerService.pages.find(x => `${x.name}` === this.route).items.splice(this.designerService.pages.find(x => `${x.name}` === this.route).items.findIndex(s => s.id == item.id), 1);
    this.page = this.designerService.pages.find(x => `${x.name}` === this.route);
  }
}
