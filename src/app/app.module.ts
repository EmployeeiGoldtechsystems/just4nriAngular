import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import {AboutusComponent} from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PropertyComponent } from './pages/property/property.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReligiousComponent } from './pages/religious/religious.component';
import { OtherComponent } from './pages/other/other.component';
import { ContactdetailsComponent } from './pages/contactdetails/contactdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FaqComponent,
    PropertyComponent,
    ReligiousComponent,
    OtherComponent,
    ContactdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
