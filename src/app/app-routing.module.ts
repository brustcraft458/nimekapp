import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'film',
    pathMatch: 'full'
  },
  {
    path: 'film',
    loadChildren: () => import('./pages/film/film.module').then( m => m.FilmPageModule)
  },
  {
    path: 'film/:endpoint',
    loadChildren: () => import('./pages/film-detail/film-detail.module').then( m => m.FilmDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
