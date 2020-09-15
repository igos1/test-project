import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites.module/components/favorites.component/favorites.component';
import { HomeComponent } from './home.module/components/home.component/home.component';
import { FavGuard } from './core.module/guards/fav.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [FavGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
