import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTypographyComponent } from './material-typography/material-typography.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';
import { MaterialBadgeComponent } from './material-badge/material-badge.component';
import { MaterialProgressComponent } from './material-progress/material-progress.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTypographyComponent,
    MaterialButtonsComponent,
    MaterialIconsComponent,
    MaterialBadgeComponent,
    MaterialProgressComponent,
    MaterialToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
