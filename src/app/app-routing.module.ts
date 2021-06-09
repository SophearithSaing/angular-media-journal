import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Angular components
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
