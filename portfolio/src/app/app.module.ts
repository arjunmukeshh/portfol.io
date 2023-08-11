import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutDirectoryComponent } from './about-directory/about-directory.component';
import { ProjectsDirectoryComponent } from './projects-directory/projects-directory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutDirectoryComponent,
    ProjectsDirectoryComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutDirectoryComponent},
      {path: 'projects', component: ProjectsDirectoryComponent},
      {path: '', redirectTo: '/about', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
