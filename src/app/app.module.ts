// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// routes
import { RouterModule } from '@angular/router';
import { routes } from './app.routing'
// services

import { AuthService } from './services/auth.service';
// components 
import { MyGenieName } from './my-genie-name/my-genie-name.component';
import { MySignupFormComponent } from './auth/my-signup-form/my-signup-form.component';
import { MyExperiencePointsComponent } from './my-experience-points/my-experience-points.component';

import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';

// number generator components
import { MyPick2GenComponent } from './Games/my-pick2-gen/my-pick2-gen.component';
import { MyPick3GenComponent } from './Games/my-pick3-gen/my-pick3-gen.component';
import { MyPick4GenComponent } from './Games/my-pick4-gen/my-pick4-gen.component';
import { MyPick5GenComponent } from './Games/my-pick5-gen/my-pick5-gen.component';
import { MyLuckyMoneyGenComponent } from './Games/my-lucky-money-gen/my-lucky-money-gen.component';
import { MyCashForLifeGenFLComponent } from './Games//my-cash-for-life-gen-fl/my-cash-for-life-gen-fl.component';
import { MyFantasy5GenFLComponent } from './Games/my-fantasy5-gen-fl/my-fantasy5-gen-fl.component';
import { MyFloridaLottoGenComponent } from './Games/my-florida-lotto-gen/my-florida-lotto-gen.component';
import { MyMegaMillionsGenComponent } from './Games/my-mega-millions-gen/my-mega-millions-gen.component';
import { MyPowerBallGenComponent } from './Games/my-power-ball-gen/my-power-ball-gen.component';

// game rules and odds components
import { MyPick3RulesComponent } from './Games/Game-Rules/my-pick3-rules/my-pick3-rules.component';
import { MyPick4RulesComponent } from './Games/Game-Rules/my-pick4-rules/my-pick4-rules.component';
import { MyPick5RulesComponent } from './Games/Game-Rules//my-pick5-rules/my-pick5-rules.component';
import { MyPick2RulesComponent } from './Games/Game-Rules/my-pick2-rules/my-pick2-rules.component';
import { MyFLLottoRulesComponent } from './Games/Game-Rules/my-fl-lotto-rules/my-fl-lotto-rules.component';
import { MyPowerBallRulesComponent } from './Games/Game-Rules/my-power-ball-rules/my-power-ball-rules.component';
import { MyMegaMillionsRulesComponent } from './Games/Game-Rules/my-mega-millions-rules/my-mega-millions-rules.component';
import { MyLuckyMoneyRulesComponent } from './Games/Game-Rules/my-lucky-money-rules/my-lucky-money-rules.component';
import { MyCashForLifeRulesComponent } from './Games/Game-Rules/my-cash-for-life-rules/my-cash-for-life-rules.component';
import { Fantsy5RulesComponent } from './Games/Game-Rules/fantsy5-rules/fantsy5-rules.component';
import { MyDashBoardComponent } from './my-dash-board/my-dash-board.component';
import { MyLoginFormComponent } from './auth/my-login-form/my-login-form.component';
import { MyLogoutComponent } from './auth/my-logout/my-logout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


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
    MyLuckyMoneyGenComponent,
    MyCashForLifeGenFLComponent,
    MyFantasy5GenFLComponent,
    MyFloridaLottoGenComponent,
    MyMegaMillionsGenComponent,
    MyPowerBallGenComponent,
    MyPick3RulesComponent,
    MyPick4RulesComponent,
    MyPick5RulesComponent,
    MyPick2RulesComponent,
    MyFLLottoRulesComponent,
    MyPowerBallRulesComponent,
    MyMegaMillionsRulesComponent,
    MyLuckyMoneyRulesComponent,
    MyCashForLifeRulesComponent,
    Fantsy5RulesComponent,
    MyDashBoardComponent,
    MyLoginFormComponent,
    MyLogoutComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
