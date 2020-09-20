import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DesignerService } from '../../services/designer.service';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  templateUrl: 'designer.component.html',
})
export class DesignerComponent {

  opened: boolean = true;

  pageName: string;

  pages: string[] = [];

  constructor(public router: Router, public designerService: DesignerService) {

  }

  addPage(name: string) {
    if (name.length < 1 || this.pages.includes(name)) {
      return;
    }

    this.designerService.pages.push({ name: name , items: []});

    this.pageName = '';
  }

  deletePage(name: string) {

    this.designerService.pages.splice(this.pages.indexOf(name), 1);

    if (this.router.url.split('/').reverse()[0] === `${name})`) {
      this.router.navigate(['designer']);
    }
  }
}
