import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search.component/search.component';
import { HeaderComponent } from './components/header.component/header.component';
import { MatInputModule } from '@angular/material/input';
import { GridComponent } from './components/grid.component/grid.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatCardModule
    ],
    declarations: [
        SearchComponent,
        HeaderComponent,
        GridComponent
    ],
    exports: [
        SearchComponent,
        HeaderComponent,
        GridComponent
    ]
})
export class SharedModule { }
