import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
    private states: Array<any> = [
        {
            name: 'Home',
            link: "/home"
        },
        {
            name: 'Favorites',
            link: "/favorites"
        }
    ];

    constructor(
        private router: Router
    ) {  }

    getStates() {
        return this.states;
    }

    changeState(link) {
        this.router.navigate([link])
    }
}