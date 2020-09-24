import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DesignerService } from '../../services/designer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../interfaces/page';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  templateUrl: 'main.component.html',
})
export class MainComponent implements OnInit {

  route: string;
  page: Page;
  constructor(public designerService: DesignerService, public activatedRoute: ActivatedRoute) {


  }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      
      this.route = params.get('name');

      this.page = this.designerService.pages.find(x => `${x.name}` === this.route);
      const parent = document.getElementById('boundary-d');
      for (let item of this.page.items) {
        item.dragPosition = { x: 0, y: 0 };
        item.dragPosition.x = item.x * parent.clientWidth;
        item.dragPosition.y = item.y * parent.clientHeight;
      }

    });

    window.addEventListener('resize', () => {
      this.page = this.designerService.pages.find(x => `${x.name}` === this.route);
      const parent = document.getElementById('boundary-d');
      for (let item of this.page.items) {
        item.dragPosition = { x: 0, y: 0 };
        item.dragPosition.x = item.x * parent.clientWidth;
        item.dragPosition.y = item.y * parent.clientHeight;
      }
    });




  }
}
