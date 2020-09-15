import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    setTostorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getFromStorage(key) {
       return JSON.parse(localStorage.getItem(key));
    }

    removeFromStorage(key) {
        localStorage.removeItem(key);
    }

}