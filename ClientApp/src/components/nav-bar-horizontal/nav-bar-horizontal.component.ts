import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Setting } from '../../interfaces/page';

@Component({
    selector: 'nav-bar-horizontal',
    templateUrl: './nav-bar-horizontal.component.html',
    styleUrls: ['./nav-bar-horizontal.component.scss']
})
/** nav-bar-horizontal component*/
export class NavBarHorizontalComponent {
    /** nav-bar-horizontal ctor */
    constructor() {

  }

  settings: Setting;

}

@NgModule({
  declarations: [NavBarHorizontalComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule]
})
class NavBarHorizontalModule {

}
