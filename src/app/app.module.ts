import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MyworkComponent } from './mywork/mywork.component';
import { MyresumeComponent } from './myresume/myresume.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { MypricingComponent } from './mypricing/mypricing.component';
import { MysocialmediaComponent } from './mysocialmedia/mysocialmedia.component';
import { MycodingtutorialsComponent } from './mycodingtutorials/mycodingtutorials.component';
import { MyotherinterestsComponent } from './myotherinterests/myotherinterests.component';
import { HomeComponent } from './home/home.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactmeComponent,
    NavigationComponent,
    MyworkComponent,
    MyresumeComponent,
    MyservicesComponent,
    MypricingComponent,
    MysocialmediaComponent,
    MycodingtutorialsComponent,
    MyotherinterestsComponent,
    HomeComponent,
    MyskillsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
