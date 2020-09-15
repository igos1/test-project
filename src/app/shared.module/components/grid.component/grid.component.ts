import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

interface gridItem {
    id: string | number,
    avatarSrc: String,
    title: String,
    subtitle: String,
    content: any,
    actions?: Array<any>
}

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
    @Input() data: Array<gridItem>;
    @Input() template: TemplateRef<any>;
    @Output() actionClicked = new EventEmitter<any>();
}