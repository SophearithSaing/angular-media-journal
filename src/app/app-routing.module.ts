import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

// Angular components
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
  { path: 'search', component: SearchComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MyMoviesComponent, canActivate: [AuthGuard] },
  { path: 'music', component: MusicComponent, canActivate: [AuthGuard] },
  { path: 'book', component: BooksComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
