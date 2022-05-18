import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemFormComponent } from './tem-form/tem-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './reactive-form/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TemFormComponent,
    ReactiveFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
