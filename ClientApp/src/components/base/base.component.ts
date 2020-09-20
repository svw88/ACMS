import { AfterViewInit, Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'component-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
/** base component*/
export class BaseComponent implements AfterViewInit {

  @ViewChild('baseContainer', { read: ViewContainerRef }) baseContainer: ViewContainerRef;
    /** base ctor */
  constructor(private cfr: ComponentFactoryResolver,
  private injector: Injector) {
    
  }

  ngAfterViewInit() {
    import('../nav-bar-horizontal/nav-bar-horizontal.component').then((x) => {
      const { NavBarHorizontalComponent } = x;
      const factory = this.cfr.resolveComponentFactory(NavBarHorizontalComponent);
      this.baseContainer.createComponent(factory, null, this.injector);
    });
  }
}
