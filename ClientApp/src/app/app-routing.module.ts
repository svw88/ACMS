import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignerComponent } from '../pages/designer/designer.component';
import { DesignerPageComponent } from '../pages/designer-page/designer-page.component';
import { MainComponent } from '../pages/main/main.component';

const routes: Routes = [
  {
    path: 'main/:name',
    component: MainComponent,
  },
  {
    path: 'designer',
    component: DesignerComponent,
    children: [
      {
        path: 'page/:name',
        component: DesignerPageComponent,
        outlet: 'designer'
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
