import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialProgressComponent } from './material-progress/material-progress.component';
import { MaterialBadgeComponent } from './material-badge/material-badge.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialTypographyComponent } from './material-typography/material-typography.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MaterialTypographyComponent },
  { path: 'button', component: MaterialButtonsComponent},
  { path: 'icons', component: MaterialIconsComponent},
  { path: 'badge', component: MaterialBadgeComponent},
  { path: 'progress', component: MaterialProgressComponent},
  { path: 'toolbar', component: MaterialToolbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
