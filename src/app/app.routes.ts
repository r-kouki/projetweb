import { Comp1Component } from './comp1/comp1.component';
import { Routes } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: 'chemain1', component: Comp1Component },
  { path: 'chemain2', component: Comp2Component },
  {path : '**', component : ErrorComponent}
];
