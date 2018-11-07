import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyGenieName } from './my-genie-name/my-genie-name.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { MyExperiencePointsComponent } from './my-experience-points/my-experience-points.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
//   { path: '', component: ContactListComponent },
//   { path: 'home', component: MyHomeComponent },
//   { path: 'about', component: MyAboutComponent },
//   { path: 'counter', component: MyCounterComponent },
//   {
// ]
@NgModule({
  declarations: [
    AppComponent,
    MyGenieName,
    MySignupFormComponent,
    MyExperiencePointsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
