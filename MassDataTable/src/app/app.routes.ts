import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path: 'form',
    component: FormComponent,
    data: { icon: 'insert_drive_file', text: 'Form' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'bar_chart', text: 'Bar' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'border_color', text: 'Border' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'bubble_chart', text: 'Bubble' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'format_bold', text: 'Bold' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'format_color_text', text: 'Color' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'format_paint', text: 'Format' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'publish', text: 'Publish' }
  },
  {
    path: 'chart',
    component: FormComponent,
    data: { icon: 'title', text: 'Title' }
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
