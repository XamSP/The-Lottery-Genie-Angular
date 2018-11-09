import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyGenieName } from './my-genie-name/my-genie-name.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { MyExperiencePointsComponent } from './my-experience-points/my-experience-points.component';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyPick2GenComponent } from './my-pick2-gen/my-pick2-gen.component';
import { MyPick3GenComponent } from './my-pick3-gen/my-pick3-gen.component';
import { MyPick4GenComponent } from './my-pick4-gen/my-pick4-gen.component';
import { MyPick5GenComponent } from './my-pick5-gen/my-pick5-gen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'signup', component: MySignupFormComponent },
  { path: 'pick2Gen', component: MyPick2GenComponent },
  { path: 'pick3Gen', component: MyPick3GenComponent },
  { path: 'pick4Gen', component: MyPick4GenComponent },
  { path: 'pick5Gen', component: MyPick5GenComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MyGenieName,
    MySignupFormComponent,
    MyExperiencePointsComponent,
    MyHomeComponent,
    MyAboutComponent,
    MyPick2GenComponent,
    MyPick3GenComponent,
    MyPick4GenComponent,
    MyPick5GenComponent,
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
