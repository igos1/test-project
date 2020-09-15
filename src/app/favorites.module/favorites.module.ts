import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { FavoritesComponent } from './components/favorites.component/favorites.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, SharedModule],
})
export class FavoritesModule { }
