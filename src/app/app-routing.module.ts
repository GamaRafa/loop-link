import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { YarnStashComponent } from './features/yarn-stash/components/yarn-stash.component';
import { RowCounterComponent } from './features/row-counter/components/row-counter.component';
import { RepCounterComponent } from './features/rep-counter/components/rep-counter.component';
import { IncreaseCalculatorComponent } from './features/increase-calculator/components/increase-calculator.component';
import { DecreaseCalculatorComponent } from './features/decrease-calculator/components/decrease-calculator.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'yarn-stash',
    component: YarnStashComponent
  },
  {
    path: 'row-counter',
    component: RowCounterComponent
  },
  {
    path: 'rep-counter',
    component: RepCounterComponent
  },
  {
    path: 'increase-calculator',
    component: IncreaseCalculatorComponent
  },
  {
    path: 'decrease-calculator',
    component: DecreaseCalculatorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
