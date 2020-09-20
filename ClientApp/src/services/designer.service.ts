import { Injectable } from '@angular/core';
import { Page } from '../interfaces/page';

@Injectable()
export class DesignerService {

  pages: Page[] = [{ name: 'Home', items: [{ id: 0, x: 0, y: 0, settings: {}, type: "NavBarComponent" }] }];
  constructor() {

  }


}
