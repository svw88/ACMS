import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { DesignerComponent } from '../pages/designer/designer.component';
import { DesignerPageComponent } from '../pages/designer-page/designer-page.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DesignerService } from '../services/designer.service';
import { MainComponent } from '../pages/main/main.component';
import { BaseComponent } from '../components/base/base.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsComponent } from '../pages/settings/settings.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    DesignerPageComponent,
    MainComponent,
    BaseComponent,
    SettingsComponent
  ],
  entryComponents: [
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })
  ],
  providers: [
    DesignerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
