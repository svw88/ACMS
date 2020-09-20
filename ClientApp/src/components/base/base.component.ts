import { AfterViewInit, Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'component-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
/** base component*/
export class BaseComponent implements AfterViewInit {

  @ViewChild('baseContainer', { read: ViewContainerRef }) baseContainer: ViewContainerRef;

  @Input() component: 'nav-bar-horizontal';
    /** base ctor */
  constructor(private cfr: ComponentFactoryResolver,
  private injector: Injector) {
    
  }

  ngAfterViewInit() {
    switch (this.component) {
      case "nav-bar-horizontal":
        import('../nav-bar-horizontal/nav-bar-horizontal.component').then((x) => {
          const { NavBarHorizontalComponent } = x;
          const factory = this.cfr.resolveComponentFactory(NavBarHorizontalComponent);
          this.baseContainer.createComponent(factory, null, this.injector);
        });
        break;
      default:
        break;
    }
   
  }
}
