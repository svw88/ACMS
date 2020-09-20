import { Component, OnInit } from '@angular/core';
import { CdkDrag} from '@angular/cdk/drag-drop';
import { DesignerService } from '../../services/designer.service';
import { Router } from '@angular/router';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  templateUrl: 'main.component.html',
})
export class MainComponent implements OnInit {

  dragPosition = { x: 0, y: 0 };
  constructor(public designerService: DesignerService, public router: Router) {
   
   
  }


  ngOnInit() {
    window.addEventListener('resize', () =>
    {
      const parent = document.getElementById('boundary-d');
      const page = this.designerService.pages[0];
      if (page) {
        this.dragPosition = {
          x: parent.clientWidth * page.items[0].x,
          y: parent.clientHeight * page.items[0].y
        };
      }
    });
    const parent = document.getElementById('boundary-d');
    const page = this.designerService.pages[0];
    if (page) {
      this.dragPosition = {
        x: parent.clientWidth * page.items[0].x,
        y: parent.clientHeight * page.items[0].y
      };
    }
  }
}
