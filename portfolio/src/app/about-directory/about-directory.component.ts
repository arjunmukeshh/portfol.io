import { Component } from '@angular/core';

@Component({
  selector: 'app-about-directory',
  templateUrl: './about-directory.component.html',
  styleUrls: ['./about-directory.component.scss']
})
export class AboutDirectoryComponent {
  public showMail : boolean = false;
  onClick(){
    this.showMail = !this.showMail;
  }
}
