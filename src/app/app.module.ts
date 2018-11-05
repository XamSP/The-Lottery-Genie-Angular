import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyGenieName } from './my-genie-name/my-genie-name.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { MyExperiencePointsComponent } from './my-experience-points/my-experience-points.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
