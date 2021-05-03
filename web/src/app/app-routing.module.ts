import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { AdminComponent } from './views/admin/admin.component';
import { ArchitectComponent } from './views/architect/architect.component';
import { BuildHomeComponent } from './views/buildHome/build-home/build-home.component';
import { ContactComponent } from './views/contact/contact.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { HouseBillComponent } from './views/house-bill/house-bill.component';
import { SignComponent } from './views/sign/sign.component';
import { SuppliesComponent } from './views/supplies/supplies.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: SignComponent },
  { path: 'arch', component: ArchitectComponent , canActivate: [AuthGuard]},
  { path: 'arch', component: ArchitectComponent , canActivate: [AuthGuard]},
  { path: 'sup', component: SuppliesComponent , canActivate: [AuthGuard]},
  { path: 'buildHome', component: BuildHomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'houseBill', component: HouseBillComponent   },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
