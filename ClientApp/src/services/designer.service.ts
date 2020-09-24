import { Injectable } from '@angular/core';
import { ComponentType, Page } from '../interfaces/page';

@Injectable()
export class DesignerService {

  pages: Page[] = [{ name: 'Home', items: [] }];
  constructor() {

  }


}
