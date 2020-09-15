import { Component, Input, TemplateRef, ViewChild, } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from 'src/app/core.module/services/storage.service';
import { ProjectsService } from '../../services/projects.srvice';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {

    private _keyWord: string;

    @ViewChild('projectCntTemp') projectCntTemp: TemplateRef<any>;

    @Input('keyWord') set keyWord(val: string) {
        if (val) {
            this.searchProjects(val);
        } else {
            this.setEmptyProjects();
        }
        this._keyWord = val;
    }

    get keyWord(): string {
        return this._keyWord;
    }

    convertedProjects$: Observable<any>;

    constructor(
        private projectsService: ProjectsService,
        private storageService: StorageService
    ) { }

    private searchProjects(word: string) {
        this.convertedProjects$ = this.projectsService.getProjects(word).pipe(
            map(projects => projects.map(project => this.convertProjects(project)))
        )
    }

    private setEmptyProjects() {
        this.convertedProjects$ = null;
    }

    private convertProjects(project) {
        return {
            id: project.id,
            avatarSrc: project.owner.avatar_url,
            title: project.name,
            content: {
                rating: project.stargazers_count,
                language: project.language,
                description: project.description,
                linkToProject: project.html_url

            },
            actions: ['add to favorites']
        }
    }

    addToFavorites(project) {
        let curentFavorites: Array<any> = this.storageService.getFromStorage('favorites') || [];
        curentFavorites.push({
            ...project,
            actions: ['delete']
        });
        this.storageService.setTostorage('favorites', curentFavorites);
    }

}