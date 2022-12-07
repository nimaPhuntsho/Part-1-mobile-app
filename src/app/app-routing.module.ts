import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./pages/form/form.module').then((m) => m.FormPageModule),
  },
  {
    path: 'list-cars',
    loadChildren: () =>
      import('./pages/list-cars/list-cars.module').then(
        (m) => m.ListCarsPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'available-cars',
    loadChildren: () =>
      import('./pages/available-cars/available-cars.module').then(
        (m) => m.AvailableCarsPageModule
      ),
  },
  {
    path: 'list-cars/:rego',
    loadChildren: () =>
      import('./pages/edit-update/edit-update.module').then(
        (m) => m.EditUpdatePageModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/error/error.module').then((m) => m.ErrorPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
