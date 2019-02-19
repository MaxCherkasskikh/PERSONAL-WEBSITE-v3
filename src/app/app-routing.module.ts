import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyworkComponent } from './mywork/mywork.component';
import { MyresumeComponent } from './myresume/myresume.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { MypricingComponent } from './mypricing/mypricing.component';
import { MysocialmediaComponent } from './mysocialmedia/mysocialmedia.component';
import { MycodingtutorialsComponent } from './mycodingtutorials/mycodingtutorials.component';
import { MyotherinterestsComponent } from './myotherinterests/myotherinterests.component';
import { FaqComponent } from './faq/faq.component';
import { ContactmeComponent } from './contactme/contactme.component';

const routes: Routes = [

  { path: '', component: HomeComponent},

  { path: 'aboutme', component: AboutmeComponent},

  { path: 'myskills', component: MyskillsComponent},

  { path: 'mywork', component: MyworkComponent},

  { path: 'myresume', component: MyresumeComponent},

  { path: 'myservices', component: MyservicesComponent},

  { path: 'mypricing', component: MypricingComponent},

  { path: 'mysocialmedia', component: MysocialmediaComponent},

  { path: 'mycodingtutorials', component: MycodingtutorialsComponent},

  { path: 'myotherinterests', component: MyotherinterestsComponent},

  { path: 'faq', component: FaqComponent},

  { path: 'contactme', component: ContactmeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
