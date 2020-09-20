import { Component, OnInit } from '@angular/core';
import { CdkDrag} from '@angular/cdk/drag-drop';
import { DesignerService } from '../../services/designer.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  templateUrl: 'designer-page.component.html',
})
export class DesignerPageComponent implements OnInit {

  route: string;
  dragPosition = { x: 0, y: 0 };
  constructor(public designerService: DesignerService, public activatedRoute: ActivatedRoute) {
   
   
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params =>
    {
     
      this.route = params.get('name');

      this.dragPosition = { x: 0, y: 0 };
      const page = this.designerService.pages.find(x => `${x.name}` === this.route);
      const parent = document.getElementById('boundary');
      if (page.items[0]) {
        this.dragPosition.x = page.items[0].x * parent.clientWidth;
        this.dragPosition.y = page.items[0].y * parent.clientHeight;
      } 
     
    });
   
  }

  drop(event: { source: CdkDrag }) {

    const pos = event.source.getFreeDragPosition();
    
    const parent = document.getElementById('boundary');
    this.designerService.pages.find(x => `${x.name}` === this.route).items = [
      {
        x: (pos.x) / parent.clientWidth,
        y: (pos.y)  / parent.clientHeight,
      }
    ];
    
  }
}
