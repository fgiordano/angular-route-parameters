import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule }   from '@angular/forms';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  // { path: 'contact/:id', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
