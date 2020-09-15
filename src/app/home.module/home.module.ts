import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { HomeComponent } from './components/home.component/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from './components/project-list.component/project-list.component';
import { ProjectsService } from './services/projects.srvice';

@NgModule({
    declarations: [
        HomeComponent,
        ProjectListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule
    ],
    providers: [
        ProjectsService
    ]
})
export class HomeModule { }
