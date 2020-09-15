import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavGuard } from './guards/fav.guard';
import { NavigationService } from './services/navigation.service';
import { StorageService } from './services/storage.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [NavigationService, FavGuard, StorageService]
})
export class CoreModule { }
