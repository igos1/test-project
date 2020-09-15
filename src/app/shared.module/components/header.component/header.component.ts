import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core.module/services/navigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
    stateList: Array<string> = [];

    constructor(
        private navigationService: NavigationService
    ) {
        this.stateList = this.navigationService.getStates();
    }

    goTo(newState) {
        this.navigationService.changeState(newState);
    }
}