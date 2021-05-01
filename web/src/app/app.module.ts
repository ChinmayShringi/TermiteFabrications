import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { SignComponent } from './views/sign/sign.component';
import { UserService } from './services/user.service';
import { TopNavbarComponent } from './views/top-navbar/top-navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BuildHomeComponent } from './views/build-home/build-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    TopNavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    DashboardComponent,
    BuildHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
