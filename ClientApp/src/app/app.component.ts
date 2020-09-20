import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignerService } from '../services/designer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ACMS';

  constructor(public router: Router, public designerService: DesignerService) {
  }

  ngOnInit() {

    if (!location.href.includes('designer')) {
      this.router.navigate(['main', this.designerService.pages[0].name]);
    }
  }

}
