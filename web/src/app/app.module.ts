import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { SignComponent } from './views/sign/sign.component';
import { UserService } from './shared/services/user.service';
import { TopNavbarComponent } from './views/top-navbar/top-navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BuildHomeComponent } from './views/buildHome/build-home/build-home.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './views/cart/cart.component';
import { ChartsModule } from 'ng2-charts';
import { HouseBillComponent } from './views/house-bill/house-bill.component';
import { AdminComponent } from './views/admin/admin.component';
import { SuppliesComponent } from './views/supplies/supplies.component';
import { ArchitectComponent } from './views/architect/architect.component';
import { RouterModule } from '@angular/router';
import { BuilderComponent } from './views/buildHome/builder/builder.component';

import {DialogModule} from 'primeng/dialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from 'primeng/toast';
import {ConfirmationService} from 'primeng/api';
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
    CartComponent,
    HouseBillComponent,
    AdminComponent,
    SuppliesComponent,
    ArchitectComponent,
    BuilderComponent,
  ],
  imports: [
    ToastModule,
    BrowserModule,
    DialogModule,
    ConfirmPopupModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
      BrowserModule,
      ChartsModule,
    FormsModule
  ],
  providers: [
    UserService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
