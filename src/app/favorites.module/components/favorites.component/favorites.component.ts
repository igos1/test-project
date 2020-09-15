import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/core.module/services/storage.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  public favProjects: Array<any>;

  constructor(private storageService: StorageService) {
    this.favProjects = this.storageService.getFromStorage('favorites');
  }

  removeFavorite(project) {
    this.favProjects = this.favProjects.filter(favProject => favProject.id !== project.id);
    this.storageService.setTostorage('favorites', this.favProjects);
  }
}
