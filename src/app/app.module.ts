// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Nebular
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbActionsModule,
  NbFormFieldModule,
  NbInputModule,
  NbIconModule,
  NbCardModule,
  NbSpinnerModule,
  NbSidebarModule,
  NbMenuModule,
  NbUserModule,
  NbSelectModule,
  NbDatepickerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// Angular components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MyMoviesComponent,
    BooksComponent,
    MusicComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbActionsModule,
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbCardModule,
    NbSpinnerModule,
    NbUserModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
