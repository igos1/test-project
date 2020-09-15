import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class FavGuard implements CanActivate {

    private password = '1234'
    static message = 'Введите пароль.';

    canActivate(): boolean {
        const result = prompt(FavGuard.message, '');
        return result === this.password;
    }
}