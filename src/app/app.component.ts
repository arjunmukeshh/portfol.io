import { Component } from '@angular/core';
import { DarkModeService } from './dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isDarkMode = false; // Initial state

  ngOnInit() {
    // Check if dark mode is enabled from local storage or user preferences
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      this.isDarkMode = storedDarkMode === 'true';
      this.applyDarkMode(this.isDarkMode);
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode(this.isDarkMode);

    // Save the dark mode preference to local storage
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  private applyDarkMode(isDark: boolean) {
    if (isDark) {
      // Apply dark mode styles
      document.body.classList.add('dark-mode');
      document.getElementById("about")?.classList.add('dark-mode');
      document.getElementById("projects")?.classList.add('dark-mode');
      document.getElementById("brand")?.classList.add('dark-mode');
      document.getElementById("mode")?.classList.add('dark-mode');
    } else {
      // Remove dark mode styles
      document.body.classList.remove('dark-mode');
      document.getElementById("about")?.classList.remove('dark-mode');
      document.getElementById("projects")?.classList.remove('dark-mode');
      document.getElementById("brand")?.classList.remove('dark-mode');
      document.getElementById("mode")?.classList.remove('dark-mode');
    }
  }
}
