import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactdetailsComponent } from './pages/contactdetails/contactdetails.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { OtherComponent } from './pages/other/other.component';
import { PropertyComponent } from './pages/property/property.component';
import { ReligiousComponent } from './pages/religious/religious.component';

const routes: Routes = [
  {path:'aboutus', component : AboutusComponent},
  {path:'home', component : HomeComponent},
  {path:'contactus', component: ContactdetailsComponent},
  {path:'faq', component: FaqComponent},
  {path:'property', component:PropertyComponent},
   {path:'religious',component:ReligiousComponent},
  {path:'other', component:OtherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
