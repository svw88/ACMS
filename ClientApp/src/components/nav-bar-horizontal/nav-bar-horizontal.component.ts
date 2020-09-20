import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

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

  log() {
    console.log('test');
  }
}

@NgModule({
  declarations: [NavBarHorizontalComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule]
})
class NavBarHorizontalModule {

}
