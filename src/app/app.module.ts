import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,

    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,


    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-AT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
