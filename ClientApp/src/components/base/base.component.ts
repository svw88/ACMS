import { AfterViewInit, Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentType, Item } from '../../interfaces/page';

@Component({
    selector: 'component-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
/** base component*/
export class BaseComponent implements AfterViewInit {

  @ViewChild('baseContainer', { read: ViewContainerRef }) baseContainer: ViewContainerRef;
  @Input() item: Item;
    /** base ctor */
  constructor(private cfr: ComponentFactoryResolver,
  private injector: Injector) {
    
  }

  ngAfterViewInit() {
    switch (this.item.type) {
      case ComponentType.NavBarHorizontalComponent:
        import('../nav-bar-horizontal/nav-bar-horizontal.component').then((x) => {
          const { NavBarHorizontalComponent } = x;
          const factory = this.cfr.resolveComponentFactory(NavBarHorizontalComponent);
          const comp = this.baseContainer.createComponent(factory, null, this.injector);
          comp.instance.settings = this.item.settings;
        });
        break;
      default:
        break;
    }
   
  }
}
