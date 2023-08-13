import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DarkModeService {
    private isDarkModeSubject = new BehaviorSubject<boolean>(false);
    isDarkMode$ = this.isDarkModeSubject.asObservable();

    constructor() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.isDarkModeSubject.next(isDarkMode);
    }

    toggleDarkMode() {
        const isDarkMode = this.isDarkModeSubject.value;
        this.isDarkModeSubject.next(!isDarkMode);
        localStorage.setItem('darkMode', (!isDarkMode).toString());
    }
}
