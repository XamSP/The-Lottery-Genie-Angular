import { Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { MySignupFormComponent } from './auth/my-signup-form/my-signup-form.component';
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

import { MyDashBoardComponent } from './my-dash-board/my-dash-board.component';

import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MyHomeComponent },
    { path: 'dashBoard', component: MyDashBoardComponent },
    { path: 'about', component: MyAboutComponent },
    { path: 'signup', component: MySignupFormComponent },
    { path: 'pick2Gen', component: MyPick2GenComponent },
    { path: 'pick3Gen', component: MyPick3GenComponent },
    { path: 'pick4Gen', component: MyPick4GenComponent },
    { path: 'pick5Gen', component: MyPick5GenComponent },
    { path: 'MyFantasy5GenFLComponent', component: MyFantasy5GenFLComponent },
    { path: 'MyCashForLifeGenFLComponent', component: MyCashForLifeGenFLComponent },
    { path: 'MyLuckyMoneyGenComponent', component: MyLuckyMoneyGenComponent },
    { path: 'MyMegaMillionsGenComponent', component: MyMegaMillionsGenComponent },
    { path: 'MyPowerBallGenComponent', component: MyPowerBallGenComponent },
    { path: 'MyFloridaLottoGenComponent', component: MyFloridaLottoGenComponent },
]